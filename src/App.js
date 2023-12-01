import './App.css';

const monthText = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'
]

const dayCountPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function App() {
  const today = new Date()
  const thisYear = today.getFullYear()

  const styleContainerDay = {
    float: 'left',
    width: 'calc(100%/7)',
    height: '32px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    fontFamily: 'Arial',
    fontSize: '12px',
  }

  const styleCenterText = {
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const getWeekValueList = (aDateString) => {
    const date = aDateString ? new Date(aDateString) : new Date()
    const dateList = [date]
    while(dateList.length < 7) {
      if (dateList[dateList.length-1].getDay() < 6) {
        const next = new Date(dateList[dateList.length-1])
        next.setDate(next.getDate() + 1)
        dateList.push(next)
      }
      if (dateList[0].getDay() > 0) {
        const prev = new Date(dateList[0])
        prev.setDate(prev.getDate() - 1)
        dateList.unshift(prev)
      }
    }
    return dateList
  }

  const getDateString = (aDate) => {
    aDate = new Date(aDate)
    return `${aDate.getFullYear()}/${aDate.getMonth()+1}/${aDate.getDate()}`
  }

  const getMonthValueList = (aDateString) => {
    const date = aDateString ? new Date(aDateString) : new Date()
    date.setDate(1)
    const dayCount = dayCountPerMonth[date.getMonth()]
    if (date.getMonth() === 1 && date.getFullYear() % 4 === 0) dayCount++
    const monthLastDay = new Date(`${date.getFullYear()}/${date.getMonth()+1}/${dayCount}`)

    let monthValueList = []
    do {
      const list = getWeekValueList(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`)
      monthValueList = [...monthValueList,...list]
      date.setDate(date.getDate() + 7)
    } while (monthValueList.filter(f => getDateString(f) === getDateString(monthLastDay)).length === 0)
    return monthValueList
  }

  const janMonth = getMonthValueList(`${thisYear}/1/1`)
  const febMonth = getMonthValueList(`${thisYear}/2/1`)
  const marMonth = getMonthValueList(`${thisYear}/3/1`)
  const aprMonth = getMonthValueList(`${thisYear}/4/1`)
  const mayMonth = getMonthValueList(`${thisYear}/5/1`)
  const junMonth = getMonthValueList(`${thisYear}/6/1`)
  const julMonth = getMonthValueList(`${thisYear}/7/1`)
  const augMonth = getMonthValueList(`${thisYear}/8/1`)
  const sepMonth = getMonthValueList(`${thisYear}/9/1`)
  const octMonth = getMonthValueList(`${thisYear}/10/1`)
  const novMonth = getMonthValueList(`${thisYear}/11/1`)
  const decMonth = getMonthValueList(`${thisYear}/12/1`)

  return (
    <div>
      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[0]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {janMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[1]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {febMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[2]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {marMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[3]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {aprMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[4]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {mayMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[5]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {junMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[6]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {julMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[7]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {augMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[8]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {sepMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[9]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {octMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[10]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {novMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

      <div class="containerMonth">
        <div class="containerMonthText centerText">{monthText[11]}</div>
        <div style={styleContainerDay}><div style={styleCenterText}>SUN</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>MON</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>TUE</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>WED</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>THU</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>FRI</div></div>
        <div style={styleContainerDay}><div style={styleCenterText}>SAT</div></div>
        {decMonth.map(date => <div style={styleContainerDay}><div style={styleCenterText}>{date.getDate()}</div></div>)}
      </div>

    </div>
  )
}

export default App;
