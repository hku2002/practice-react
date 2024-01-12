package kr.co.todo.api.domain.repository;

import java.util.List;
import kr.co.todo.api.domain.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query("SELECT tsk FROM Task tsk JOIN FETCH tsk.todo td")
    List<Todo> findAllWithTasks();

}
