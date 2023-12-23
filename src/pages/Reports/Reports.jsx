import styles from './Reports.module.css'
import TicketsContainer from '../../components/TicketsContainer/TicketsContainer'

function Reports() {
  return (
    <div className={styles.reports}>
        <div className={styles.header}>
            <h1>Reports</h1>
        </div>
        <div className={styles.tickets_container}>
            <TicketsContainer />
        </div>
    </div>
  )
}

export default Reports