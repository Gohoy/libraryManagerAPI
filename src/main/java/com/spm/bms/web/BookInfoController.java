package com.spm.bms.web;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.spm.bms.model.BookInfoReqVO;
import com.spm.bms.service.BookInfoService;
import com.spm.bms.model.BookInfo;
import com.spm.bms.utils.MyResult;
import com.spm.bms.utils.MyUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/bookInfo")
public class BookInfoController {

    @Autowired
    BookInfoService bookInfoService;

    // 获取图书数量
    @GetMapping(value = "/getCount")
    public Integer getCount(){
        return bookInfoService.getCount();
    }

    // 查询所有图书信息
    @GetMapping(value = "/queryBookInfos")
    public List<BookInfo> queryBookInfos(){
        return bookInfoService.queryBookInfos();
    }

    // 分页搜索查询图书信息 params: {page, limit, bookname, bookauthor, booktypeid}
    @GetMapping(value = "/queryBookInfosByPage")
    public Map<String, Object> queryBookInfosByPage(@RequestParam Map<String, Object> params){
        MyUtils.parsePageParams(params);
        int count = bookInfoService.getSearchCount(params);  // 获得总数
        List<BookInfo> bookInfos = bookInfoService.searchBookInfosByPage(params);  // 分页查询
        return MyResult.getListResultMap(0, "success", count, bookInfos);
    }

    // 添加图书信息
    @PostMapping(value = "/addBookInfo")
    public Integer addBookInfo(@RequestBody BookInfo bookInfo){
        return bookInfoService.addBookInfo(bookInfo);
    }

    @PostMapping(value = "/addBookInfoBatch")
    public void addBookInfoBatch(@RequestBody BookInfoReqVO bookInfoReqVO){
        System.out.println("Received Book Info Request: " + bookInfoReqVO.toString()); // 打印接收到的请求数据
        BookInfo bookInfo = new BookInfo();
        for (String code : bookInfoReqVO.getCodes()) {
            bookInfo.setBookname(bookInfoReqVO.getBookname());
            System.out.println("Book Name: " + bookInfoReqVO.getBookname()+bookInfoReqVO.getLocation()+bookInfoReqVO.getBookauthor()); // 打印书名
            bookInfo.setCount(1);
            bookInfo.setIsborrowed((byte) 0);
            bookInfo.setLocation(bookInfoReqVO.getLocation());
            bookInfo.setBookauthor(bookInfoReqVO.getBookauthor());
            bookInfo.setBookdesc(bookInfoReqVO.getBookdesc());
            bookInfo.setBookprice(bookInfoReqVO.getBookprice());
            bookInfo.setBooktypeid(bookInfoReqVO.getBooktypeid());
            bookInfo.setBooktypename(bookInfo.getBooktypename()); // 这里可能有问题，需要根据实际情况处理
            bookInfo.setBookimg(bookInfoReqVO.getBookimg());
            bookInfo.setCode(code);
            bookInfoService.addBookInfo(bookInfo);
        }
    }

    // 删除图书信息
    @DeleteMapping(value = "/deleteBookInfo")
    public Integer deleteBookInfo(@RequestBody BookInfo bookInfo){
        return bookInfoService.deleteBookInfo(bookInfo);
    }

    // 删除一些图书信息
    @DeleteMapping(value = "/deleteBookInfos")
    public Integer deleteBookInfos(@RequestBody List<BookInfo> bookInfos){
        return bookInfoService.deleteBookInfos(bookInfos);
    }

    // 更新图书信息
    @PutMapping(value = "/updateBookInfo")
    public Integer updateBookInfo(@RequestBody BookInfo bookInfo){
        return bookInfoService.updateBookInfo(bookInfo);
    }
}
