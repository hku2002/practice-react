package kr.co.todo.api.domain.repository;

import kr.co.todo.api.domain.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("SELECT tsk FROM Task tsk JOIN FETCH tsk.todo td")
    List<Task> findTodoAll();

}
