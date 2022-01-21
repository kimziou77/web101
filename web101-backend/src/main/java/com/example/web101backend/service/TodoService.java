package com.example.web101backend.service;

import com.example.web101backend.persistence.TodoEntity;
import com.example.web101backend.persistence.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class TodoService {
    @Autowired
    private TodoRepository repository;

    private void validate(final TodoEntity entity){
        if(entity == null){
            log.warn("Entity cannot be null");
            throw new RuntimeException("Entity cannot be null");
        }
        if(entity.getUserId()==null){
            log.warn("Unknown User.");
            throw new RuntimeException("Unknown User");
        }
    }
    public List<TodoEntity> create(final TodoEntity entity){
        validate(entity);
        repository.save(entity);
        log.info("Entity id : {} is saved.",entity.getId());
        return repository.findByUserId(entity.getUserId());
    }
    public List<TodoEntity> retrieve(final String userId){
        return repository.findByUserId(userId);
    }
    public List<TodoEntity> update(final TodoEntity entity){
        validate(entity);
        final Optional<TodoEntity> original = repository.findById(entity.getId());
        original.ifPresent(todo->{
            todo.setTitle(entity.getTitle());
            todo.setDone(entity.isDone());
            repository.save(todo);
        });
        return retrieve(entity.getUserId());
    }
}
