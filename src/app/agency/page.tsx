import styles from '../page.module.css'

interface CompetitiveReportRequests {
  RequestID: number
  Creator: string
  RequestingBrand: string
  CompetitorName: string
  Vendors: Array<string>
  DueDate: string
}

export default function Agency() {
  const requestsMock: Array<CompetitiveReportRequests> = [
    {
      RequestID: 123,
      Creator: "abc",
      RequestingBrand: "brand a",
      CompetitorName: "brand b",
      Vendors: ["vendor a", "vendor b"],
      DueDate: "2023-10-14T19:09:43.278Z"
    },
    {
      RequestID: 124,
      Creator: "abcd",
      RequestingBrand: "brand c",
      CompetitorName: "brand d",
      Vendors: ["vendor c", "vendor d"],
      DueDate: "2023-10-14T19:09:50.278Z"
    }
  ]
  return (
    <div className={styles.description}>
      <h2>This is the page for the Agencies.</h2>
      <br />
      <ul>
        {requestsMock.map((request: CompetitiveReportRequests) => {
          return <li>{request.RequestID}</li>
        })}
      </ul>
    </div>
  )
}


