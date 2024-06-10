package com.spm.bms.service.impl;

import com.spm.bms.mapper.BookInfoMapper;
import com.spm.bms.service.BookInfoService;
import com.spm.bms.model.BookInfo;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

@Service
public class BookInfoServiceImpl implements BookInfoService {
    private static final String URL_TEMPLATE = "https://api2.isbndb.com/book/{ISBN}";
    private static final String API_KEY = "53630_538f7d41e7e0a9e1347b32b8a469c7e5";

    private final RestTemplate restTemplate = new RestTemplate();

    @Resource
    private BookInfoMapper bookInfoMapper;

    @Override
    public Integer getCount() {
        return bookInfoMapper.selectCount();
    }

    @Override
    public List<BookInfo> queryBookInfos() {
        return bookInfoMapper.selectAll();
    }

    @Override
    public BookInfo queryBookInfoByCode(String code) {
        return bookInfoMapper.selectByCode(code);
    }

    @Override
    public BookInfo queryBookInfoById(Integer bookid) {
        return bookInfoMapper.selectByPrimaryKey(bookid);
    }

    @Override
    public Integer getSearchCount(Map<String, Object> params) {
        return bookInfoMapper.selectCountBySearch(params);
    }

    @Override
    public List<BookInfo> searchBookInfosByPage(Map<String, Object> params) {
        return bookInfoMapper.selectBySearch(params);
    }

    @Override
    public Integer addBookInfo(BookInfo bookInfo) {
        return bookInfoMapper.insertSelective(bookInfo);
    }

    @Override
    public Integer deleteBookInfo(BookInfo bookInfo) {
        int count = 0;
        try {
            count = bookInfoMapper.deleteByPrimaryKey(bookInfo.getBookid());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    @Override
    public Integer deleteBookInfos(List<BookInfo> bookInfos) {
        int count = 0;
        for (BookInfo bookInfo : bookInfos) {
            count += deleteBookInfo(bookInfo);
        }
        return count;
    }

    @Override
    public Integer updateBookInfo(BookInfo bookInfo) {
        return bookInfoMapper.updateByPrimaryKeySelective(bookInfo);
    }

    @Override
    public List<BookInfo> importBookBatch(List<String> ISBNs) {
        List<BookInfo> bookInfos = new ArrayList<>();

        for (String ISBN : ISBNs) {
            RequestEntity<Void> request = RequestEntity
                    .get(URL_TEMPLATE, ISBN)
                    .header("Authorization", API_KEY)
                    .build();

            ResponseEntity<BookInfoByISBN> response = restTemplate.exchange(request, BookInfoByISBN.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                BookInfoByISBN.Info info = response.getBody().book;
                BookInfo bookInfo = new BookInfo();
                bookInfo.setBookname(info.title);
                bookInfo.setBookauthor(info.authors.get(0));
                bookInfo.setBookprice(BigDecimal.valueOf(Math.random() * (120 - 50) + 50).setScale(1, RoundingMode.DOWN));
                bookInfo.setBooktypeid(1);
                bookInfo.setBookdesc(info.synopsis);
                bookInfo.setIsborrowed((byte) 0);
                bookInfo.setBookimg(info.image);
                bookInfo.setCode(info.isbn13);

                bookInfos.add(bookInfo);
            }
        }

        for (BookInfo bookInfo : bookInfos) {
            bookInfoMapper.insertSelective(bookInfo);
        }
        return bookInfoMapper.selectByCodes(ISBNs);
    }

    private static class BookInfoByISBN {
        public Info book;

        private static class Info {
            public String title;
            public String isbn13;
            public List<String> authors;
            public String synopsis;
            public String image;
        }
    }
}
