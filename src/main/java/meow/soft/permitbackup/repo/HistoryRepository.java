package meow.soft.permitbackup.repo;

import meow.soft.permitbackup.domain.HistoryEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<HistoryEntry, Long> {
}
