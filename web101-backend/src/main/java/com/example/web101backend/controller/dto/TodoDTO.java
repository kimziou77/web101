package com.example.web101backend.controller.dto;

import com.example.web101backend.persistence.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoDTO {
    private String id;
    private String title;
    private boolean done;
    // userId는 app과 database에서 사용자를 구별하는 고유 식별자이기 때문에
    // 숨길 수 있다면 숨기는 것이 보안상 좋다.


    // 사용자는 이 클래스를 이용해 Todo_ 아이템을 생성, 수정, 삭제 할 예정
    public TodoDTO(final TodoEntity entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.done = entity.isDone();
    }
}
