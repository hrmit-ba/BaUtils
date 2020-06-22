// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TroopInteractiveTable from "./TroopInteractiveTable"

class Troops extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      timers: { warriors: [0,0,0,0,0], riders: [0,0,0,0,0], shamans: [0,0,0,0,0] },
      timerPerc: { warriors: { percValue: 0 }, riders: { percValue: 0 }, shamans: { percValue: 0 } },
      allPerc: 0,
      hordeDiscount: 0,
      amounts: { warriors: [0,0,0,0,0], riders: [0,0,0,0,0], shamans: [0,0,0,0,0] },
      power: { warriors: [0,0,0,0,0], riders: [0,0,0,0,0], shamans: [0,0,0,0,0] },
      warriors: this.props.troops.filter(x=>x.kind === "warriors"),
      riders: this.props.troops.filter(x=>x.kind === "riders"),
      shamans: this.props.troops.filter(x=>x.kind === "shamans"),
      totals: {
        warriors: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          },
          total_power: 0,
        },
        riders: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          },
          total_power: 0,
        },
        shamans: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          },
          total_power: 0,
        }
      }
    }
  }

  secondsToHours = (value) => {
    if (!value) return "00:00:00"

    var seconds = value
    var days  = Math.floor(seconds/(3600*24))
    seconds -= days*3600*24
    var hours = Math.floor(seconds / 3600)
    seconds -= hours*3600
    var minutes = Math.floor(seconds / 60)
    seconds -= minutes*60
    days = days == 0 ? "" : days+'d '
    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    return days+hours+':'+minutes+':'+seconds
  }

  handleChange = (i, type, ev) => {
    var amounts = this.state.amounts
    var power = this.state.power
    var totals = this.state.totals

    amounts[type][i] = ev.target.value
    power[type][i] = ev.target.value * this.state[type][i].data.details.power

    totals[type].total_time = this.getTotalTime(amounts[type], type)
    totals[type].total_rss = this.getTotalRss(amounts[type], this.state[type])
    totals[type].total_power = this.getTotalPower(amounts[type], this.state[type])

    this.setState({
      ...this.state,
        amounts: amounts,
        totals: totals,
        power: power,
    })
  }

  updateTotals = (type, bind=null) => {
    bind = bind ?? this.state

    var totals = bind.totals
    totals[type].total_time = this.getTotalTime(bind.amounts[type], type)

    this.setState({
    ...bind,
      totals: totals,
    })
  }

  onMainPercChange = (type, e) => {
    var allPerc = this.state.allPerc
    var all_troop_types = ['warriors', 'riders', 'shamans']

    allPerc = !e.target.value ? 0 : e.target.value

    this.setState({
      ...this.state,
        allPerc: allPerc,
    }, () => {

      for(var i=0; i< all_troop_types.length; i++) {
        this.updateTotals(all_troop_types[i], this.state)
      }
    })
  }

  onTroopPercChange = (type, e) => {
    var timerPerc = this.state.timerPerc
    timerPerc[type].percValue = !e.target.value ? 0 : e.target.value

    this.setState({
      ...this.state,
        timerPerc: timerPerc,
    }, () => {
        this.updateTotals(type, this.state)
    })
  }

  getTotalPower = (amounts, troops) => {
    var totalPower = 0
    for(var i=0;i<amounts.length;i++) { totalPower += amounts[i] * troops[i].data.details.power }
    return totalPower
  }

  calculateTimePerc = (time, type, tier, bind=null) => {
    bind = bind ?? this.state

    var to_divide = time * bind.amounts[type][tier]
    var divided_by = (100 + parseFloat(bind.allPerc) + parseFloat(bind.timerPerc[type].percValue))/100

    return Math.round(to_divide/divided_by)
  }

  getTotalTime = (amounts, type, bind=null) => {
    var totalTime = 0
    bind = bind ?? this.state
    for(var i=0; i<amounts.length ;i++) {
      totalTime += this.calculateTimePerc(bind[type][i].data.details.time,type, i, bind)
    }

    return totalTime
  }

  getTotalRss = (amounts, group, disc=null) => {
    var total = { wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0 }
    disc = disc ?? this.state.hordeDiscount

    amounts.map((amount,i) => {
      Object.keys(total).map((key) => {
        total[key] += amount * (group[i].data.resources[key] * ((100-disc)/100))
      })
    })

    return total
  }

  enableHordeDiscount = (e) => {
    var totals = this.state.totals
    var discount = this.state.hordeDiscount == 0 ? 8 : 0

    this.updateAllTotals(totals, discount)

    this.setState({
      ...this.state,
        hordeDiscount: discount,
        totals: totals
    })
  }

  updateAllTotals = (totals, discount) => {
    var all_troop_types = ['warriors', 'riders', 'shamans']

    for(var i=0; i< all_troop_types.length; i++){
      var type = all_troop_types[i]
      totals[type].total_rss = this.getTotalRss(this.state.amounts[type], this.state[type], discount)
    }
  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render () {
    return (
      <div className="container">
        <div className="bs-docs-section">

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables" className="title-center">Final Total</h1>
              </div>

              <div className="bs-component">
                <div className="horde-checker">
                  {
                    <React.Fragment>
                      <input
                        type="checkbox"
                        className="perc-check"
                        onChange={(e) => this.enableHordeDiscount(e)}
                      />
                      <span className="tag-span">Yellow Horde discount</span>
                    </React.Fragment>
                  }
                </div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Power Gained</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr className="table-success">
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_power +
                          this.state.totals.riders.total_power +
                          this.state.totals.shamans.total_power)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.wood +
                          this.state.totals.riders.total_rss.wood +
                          this.state.totals.shamans.total_rss.wood)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.meat +
                          this.state.totals.riders.total_rss.meat +
                          this.state.totals.shamans.total_rss.meat)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.mana +
                          this.state.totals.riders.total_rss.mana +
                          this.state.totals.shamans.total_rss.mana)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.stone +
                          this.state.totals.riders.total_rss.stone +
                          this.state.totals.shamans.total_rss.stone)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.ivory +
                          this.state.totals.riders.total_rss.ivory +
                          this.state.totals.shamans.total_rss.ivory)
                        }</td>
                         <td scope="col">{
                          this.secondsToHours(this.state.totals.warriors.total_time +
                          this.state.totals.riders.total_time +
                          this.state.totals.shamans.total_time)
                        }</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="info-wrapper">
            <span> A short step by step to get your training speed values for the calculator: </span>
            <br />
            <span className="tag-span"> Start by clicking the profile menu button: <div className="tag-img" /></span>
            <span className="tag-span"> Then click on the "i" on the right side of the screen: <div className="info-button" /></span>
            <span className="tag-span"> In combat information you are looking for the following: <div className="training-speed" /></span>
          </div>

            <TroopInteractiveTable
              bind={this.state}
              troopType="warriors" onChange={this.handleChange}
              onMainPercChange= {this.onMainPercChange}
              onTroopPercChange= {this.onTroopPercChange}
              calculateTimePerc= {this.calculateTimePerc}
              secondsToHours= {this.secondsToHours} />

            <TroopInteractiveTable
              bind={this.state}
              troopType="riders" onChange={this.handleChange}
              onMainPercChange= {this.onMainPercChange}
              onTroopPercChange= {this.onTroopPercChange}
              calculateTimePerc= {this.calculateTimePerc}
              secondsToHours= {this.secondsToHours}/>

            <TroopInteractiveTable
              bind={this.state}
              troopType="shamans" onChange={this.handleChange}
              onMainPercChange= {this.onMainPercChange}
              onTroopPercChange= {this.onTroopPercChange}
              calculateTimePerc= {this.calculateTimePerc}
              secondsToHours= {this.secondsToHours} />
        </div>
      </div>
    )
  }

}

export default Troops

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Troops  />,
    document.body.appendChild(document.createElement('div')),
  )
})
