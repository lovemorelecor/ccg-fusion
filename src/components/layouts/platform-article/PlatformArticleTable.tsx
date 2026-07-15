import type { PlatformArticleTable } from '../../../data/platformArticleContent'

export type PlatformArticleTableBlockProps = {
  table: PlatformArticleTable
}

export function PlatformArticleTableBlock({ table }: PlatformArticleTableBlockProps) {
  return (
    <div className="pa-table-wrap">
      {table.intro ? <p className="pa-article__p pa-table-wrap__intro">{table.intro}</p> : null}
      <div className="pa-table-scroll">
        <table className="pa-table">
          {table.caption ? <caption className="pa-table__caption">{table.caption}</caption> : null}
          <thead>
            <tr>
              <th scope="col">{table.headers[0]}</th>
              <th scope="col">{table.headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.category}>
                <th scope="row">{row.category}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
