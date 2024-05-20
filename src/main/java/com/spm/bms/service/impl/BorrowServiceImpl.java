package com.spm.bms.service.impl;

import com.spm.bms.mapper.BorrowMapper;
import com.spm.bms.model.Borrow;
import com.spm.bms.service.BorrowService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

@Service
public class BorrowServiceImpl implements BorrowService {

    @Resource
    private BorrowMapper borrowMapper;

    @Override
    public Integer getCount() {
        return borrowMapper.selectCount();
    }

    @Override
    public Integer getSearchCount(Map<String, Object> params) {
        return borrowMapper.selectCountBySearch(params);
    }

    @Override
    public List<Borrow> searchBorrowsByPage(Map<String, Object> params) {
        List<Borrow> borrows = borrowMapper.selectBySearch(params);
        // 添加string类型的时间显示
        for (Borrow borrow : borrows) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            if (borrow.getBorrowtime() != null)
                borrow.setBorrowtimestr(simpleDateFormat.format(borrow.getBorrowtime()));
            if (borrow.getReturntime() != null)
                borrow.setReturntimestr(simpleDateFormat.format(borrow.getReturntime()));
        }
        return borrows;
    }

    @Override
    public Integer addBorrow(Borrow borrow) {
        // 将string类型的时间重新调整
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        try {
            borrow.setBorrowtime(simpleDateFormat.parse(borrow.getBorrowtimestr()));
            borrow.setReturntime(simpleDateFormat.parse(borrow.getReturntimestr()));
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(borrow.getBorrowtime());
            calendar.add(Calendar.DAY_OF_MONTH, 20);
            borrow.setEndtime(calendar.getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return borrowMapper.insertSelective(borrow);
    }


    // 不会调整时间格式的add
    @Override
    public Integer addBorrow2(Borrow borrow) {
        return borrowMapper.insertSelective(borrow);
    }

    @Override
    public Integer deleteBorrow(Borrow borrow) {
        // 先查询有没有还书
        Borrow borrow1 = borrowMapper.selectByPrimaryKey(borrow.getBorrowid());
        if (borrow1.getReturntime() == null) return 0;
        return borrowMapper.deleteByPrimaryKey(borrow.getBorrowid());
    }

    @Override
    public Integer deleteBorrows(List<Borrow> borrows) {
        int count = 0;
        for (Borrow borrow : borrows) {
            count += deleteBorrow(borrow);
        }
        return count;
    }

    @Override
    public Integer updateBorrow(Borrow borrow) {
        // 将string类型的时间重新调整
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        try {
            borrow.setBorrowtime(simpleDateFormat.parse(borrow.getBorrowtimestr()));
            borrow.setReturntime(simpleDateFormat.parse(borrow.getReturntimestr()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return borrowMapper.updateByPrimaryKeySelective(borrow);
    }

    // 不调整时间格式的更新
    @Override
    public Integer updateBorrow2(Borrow borrow) {
        return borrowMapper.updateByPrimaryKeySelective(borrow);
    }

    @Override
    public Borrow queryBorrowsById(Integer borrowid) {
        return borrowMapper.selectByPrimaryKey(borrowid);
    }

    @Override
    public Borrow queryBorrowsByBookId(Integer bookId) {
        return borrowMapper.selectByBookId(bookId);
    }

    @Override
    public Integer keepMoreDays(Integer borrowId) {
        Borrow borrow = queryBorrowsById(borrowId);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(borrow.getEndtime());
        calendar.add(Calendar.DAY_OF_MONTH, 20);
        borrow.setEndtime(calendar.getTime());
        return borrowMapper.updateByPrimaryKey(borrow);
    }

}
