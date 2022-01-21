package com.example.web101backend.persistence.repository;

import com.example.web101backend.persistence.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {
    List<TodoEntity> findByUserId(String userId);
    // select * from todorepository where userid=`{userId}`
}
