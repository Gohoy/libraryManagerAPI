package com.spm.bms.model;

import java.util.List;

public class BookInfoReqVO extends BookInfo{
    List<String> codes;

    public List<String> getCodes() {
        return codes;
    }

    public void setCodes(List<String> codes) {
        this.codes = codes;
    }
}
