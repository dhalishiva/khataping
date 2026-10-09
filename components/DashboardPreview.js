const rows = [
  ['Aarav Sharma','₹2,500','Today','Due today'],
  ['Meera Jain','₹1,800','12 Oct','Upcoming'],
  ['Rohan Verma','₹3,200','04 Oct','Overdue'],
  ['Nisha Gupta','₹1,499','02 Oct','Paid']
]
export default function DashboardPreview({ admin=false }) {
  return (
    <div className="dashFrame" aria-label={admin ? 'KhataPing admin dashboard preview' : 'KhataPing user dashboard preview'}>
      <div className="dashTop"><div className="dashLogo"><span>₹</span> KhataPing</div><div className="dashSearch">⌕ Search</div><div className="avatar">SD</div></div>
      <div className="dashBody">
        <aside className="dashSide"><b>Overview</b><span>Customers</span><span>Dues</span><span>Reminders</span><span>Payments</span><span>Settings</span></aside>
        <main className="dashMain">
          <div className="dashHeading"><div><small>{admin ? 'Platform control' : 'Friday, 9 October'}</small><h3>{admin ? 'Admin overview' : 'Good afternoon 👋'}</h3></div><button>+ {admin ? 'Invite' : 'Add due'}</button></div>
          <div className="statGrid">
            {(admin ? [['Active users','1,248','+12%'],['MRR','₹1.82L','+8.4%'],['Reminders','42.6K','98.7%'],['Churn','2.8%','-0.4%']] : [['Expected','₹48,900','This month'],['Collected','₹36,250','74%'],['Pending','₹9,450','6 people'],['Overdue','₹3,200','1 person']]).map(x => <div className="stat" key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><em>{x[2]}</em></div>)}
          </div>
          <div className="dashCard">
            <div className="cardTitle"><div><h4>{admin ? 'Recent signups' : 'Upcoming & overdue'}</h4><span>{admin ? 'Latest customer activity' : 'Your next collections at a glance'}</span></div><a>View all</a></div>
            <div className="tableRows">
              {rows.map((r,i) => <div className="tableRow" key={r[0]}><span className="person"><i>{r[0][0]}</i><b>{r[0]}</b></span><span>{admin ? ['Tutor','Gym','PG owner','Freelancer'][i] : r[1]}</span><span>{admin ? ['₹149','₹149','Trial','₹149'][i] : r[2]}</span><span className={`badge b${i}`}>{admin ? ['Active','Active','Trial','Active'][i] : r[3]}</span><span className="dots">•••</span></div>)}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
