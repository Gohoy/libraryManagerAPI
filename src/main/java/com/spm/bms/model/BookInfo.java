package com.spm.bms.model;

import java.math.BigDecimal;

public class BookInfo {
    private Integer bookid;

    private String bookname;

    private String bookauthor;

    private BigDecimal bookprice;

    private Integer booktypeid;

    private String booktypename;

    private String bookdesc;

    private Byte isborrowed;

    private String bookimg;

    private int count;

    private String code;
    private String location;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getBookid() {
        return bookid;
    }

    public void setBookid(Integer bookid) {
        this.bookid = bookid;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getBookauthor() {
        return bookauthor;
    }

    public void setBookauthor(String bookauthor) {
        this.bookauthor = bookauthor;
    }

    public BigDecimal getBookprice() {
        return bookprice;
    }

    public void setBookprice(BigDecimal bookprice) {
        this.bookprice = bookprice;
    }

    public Integer getBooktypeid() {
        return booktypeid;
    }

    public void setBooktypeid(Integer booktypeid) {
        this.booktypeid = booktypeid;
    }

    public String getBooktypename() {
        return booktypename;
    }

    public void setBooktypename(String booktypename) {
        this.booktypename = booktypename;
    }

    public String getBookdesc() {
        return bookdesc;
    }

    public void setBookdesc(String bookdesc) {
        this.bookdesc = bookdesc;
    }

    public Byte getIsborrowed() {
        return isborrowed;
    }

    public void setIsborrowed(Byte isborrowed) {
        this.isborrowed = isborrowed;
    }

    public String getBookimg() {
        return bookimg;
    }

    public void setBookimg(String bookimg) {
        this.bookimg = bookimg;
    }
}
