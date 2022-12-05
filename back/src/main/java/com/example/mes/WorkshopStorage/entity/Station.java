package com.example.mes.WorkshopStorage.entity;

import java.sql.Timestamp;

public class Station {
    /**
     * uuid
     */
    private String uuid;
    /**
     *id
     */
    private String id;

    /**
     * line_uuid
     */
    private String workshop_id;
    /**
     * line_uuid
     */
    private String line_id;
    /**
     * user_id
     */
    private String user;
    /**
     * 设备id
     */
    private String equip_id;
    /**
     * 设备名字
     */
    private String equip_name;
    /**
     * 顺序
     */
    private String ordered;
    /**
     * verify
     */
    private String verify;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWorkshop_id() {
        return workshop_id;
    }

    public void setWorkshop_id(String workshop_id) {
        this.workshop_id = workshop_id;
    }

    public String getLine_id() {
        return line_id;
    }

    public void setLine_id(String line_id) {
        this.line_id = line_id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getOrdered() {
        return ordered;
    }

    public void setOrdered(String ordered) {
        this.ordered = ordered;
    }

    public String getEquip_id() {
        return equip_id;
    }

    public void setEquip_id(String equip_id) {
        this.equip_id = equip_id;
    }

    public String getEquip_name() {
        return equip_name;
    }

    public void setEquip_name(String equip_name) {
        this.equip_name = equip_name;
    }


    public String getVerify() {
        return verify;
    }

    public void setVerify(String verify) {
        this.verify = verify;
    }

    public String getPre_id() {
        return pre_id;
    }

    public void setPre_id(String pre_id) {
        this.pre_id = pre_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(String is_deleted) {
        this.is_deleted = is_deleted;
    }

    public Timestamp getCreated_time() {
        return created_time;
    }

    public void setCreated_time(Timestamp created_time) {
        this.created_time = created_time;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public Timestamp getModified_time() {
        return modified_time;
    }

    public void setModified_time(Timestamp modified_time) {
        this.modified_time = modified_time;
    }

    public String getModified_by() {
        return modified_by;
    }

    public void setModified_by(String modified_by) {
        this.modified_by = modified_by;
    }

    /**
     * pre_id
     */
    private String pre_id;
    /**
     * 状态
     */
    private String status;
    /**
     * 被删除
     */
    private String is_deleted;
    /**
     * 创建时间
     */
    private Timestamp created_time;
    /**
     * 创建人
     */
    private String created_by;
    /**
     * 修改时间
     */
    private Timestamp modified_time;
    /**
     * 修改人
     */
    private String modified_by;

}
