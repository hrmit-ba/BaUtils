// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Troops extends React.Component {

  constructor(props) {
    super(props)
    debugger
    this.state = {
      timers: {
        warriors:[0,0,0,0,0],
        riders: [0,0,0,0,0],
        oracles: [0,0,0,0,0],
      },
      amounts: {
        warriors:[0,0,0,0,0],
        riders:[0,0,0,0,0],
        oracles:[0,0,0,0,0],
      },
      totals: {
        warriors: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        },
        riders: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        },
        oracles: {
          total_time: 0,
          total_rss: {
            wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0
          }
        }
      }
    }

    this.troops = props.troops
  }

  secondsToHours = (value) => {
    if (!value) return "00:00:00"

    var seconds = value
    var hours = Math.floor(seconds / 3600)
    seconds -= hours*3600
    var minutes = Math.floor(seconds / 60)
    seconds -= minutes*60

    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    return hours+':'+minutes+':'+seconds
}

  handleChange = (i, type, ev) => {
    var amounts = this.state.amounts
    amounts[type][i] = ev.target.value

    var totals = this.state.totals
    totals[type].total_time = this.getTotalTime(amounts[type], this.state.timers[type])
    totals[type].total_rss = this.getTotalRss(amounts[type], this[type])

    this.setState({
      ...this.state,
        amounts: amounts,
        totals: totals,
    })
  }

  handleTimeChange = (i, type, ev) => {
    var timers = this.state.timers
    timers[type][i] = ev.target.value

    var totals = this.state.totals
    totals[type].total_time = this.getTotalTime(this.state.amounts[type], this.state.timers[type])

    this.setState({
      ...this.state,
        timers: timers,
        totals: totals,
    })
  }

  getTotalTime = (amounts, timers) => {
    var totalTime = 0
    for(var i=0; i<amounts.length ;i++) { totalTime += amounts[i] * timers[i] }
    return totalTime
  }

  getTotalRss = (amounts, groups) => {
    var total = { wood: 0, meat: 0, mana: 0, stone: 0, ivory: 0 }

    amounts.map((amount,i) => {
      Object.keys(total).map((key) => {
        total[key] += amount * groups[i][key]
      })
    })

    return total
  }

  formatNumber(num) {
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
                <table className="table table-hover">
                  <thead>
                    <tr>
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
                          this.formatNumber(this.state.totals.warriors.total_rss.wood +
                          this.state.totals.riders.total_rss.wood +
                          this.state.totals.oracles.total_rss.wood)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.meat +
                          this.state.totals.riders.total_rss.meat +
                          this.state.totals.oracles.total_rss.meat)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.mana +
                          this.state.totals.riders.total_rss.mana +
                          this.state.totals.oracles.total_rss.mana)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.stone +
                          this.state.totals.riders.total_rss.stone +
                          this.state.totals.oracles.total_rss.stone)
                        }</td>
                        <td scope="col">{
                          this.formatNumber(this.state.totals.warriors.total_rss.ivory +
                          this.state.totals.riders.total_rss.ivory +
                          this.state.totals.oracles.total_rss.ivory)
                        }</td>
                         <td scope="col">{
                          this.secondsToHours(this.state.totals.warriors.total_time +
                          this.state.totals.riders.total_time +
                          this.state.totals.oracles.total_time)
                        }</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Warriors</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.troops.warriors.map((war,i) => {
                      var key = "war_"+i
                      return (
                        <React.Fragment>
                          <tr className="table-dark" key={key}>
                            <td scope="col"><div className={"icon troop " + war.class_name} title={war.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "warriors", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "warriors", e)}
                                />
                            </td>
                            <td scope="col">{this.formatNumber(war.wood * this.state.amounts.warriors[i])}</td>
                            <td scope="col">{this.formatNumber(war.meat * this.state.amounts.warriors[i])}</td>
                            <td scope="col">{this.formatNumber(war.mana * this.state.amounts.warriors[i])}</td>
                            <td scope="col">{this.formatNumber(war.stone * this.state.amounts.warriors[i])}</td>
                            <td scope="col">{this.formatNumber(war.ivory * this.state.amounts.warriors[i])}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.warriors[i] * this.state.amounts.warriors[i])}</td>
                          </tr>
                        </React.Fragment>
                      )
                    })}

                      <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.formatNumber(this.state.totals.warriors.total_rss.wood)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.warriors.total_rss.meat)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.warriors.total_rss.mana)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.warriors.total_rss.stone)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.warriors.total_rss.ivory)}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.warriors.total_time)}</td>
                      </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Beastmaster</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.troops.riders.map((rider,i) => {
                      return (
                        <React.Fragment>
                          <tr className="table-dark">
                            <td scope="col"><div className={"icon troop " + rider.class_name} title={rider.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "riders", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "riders", e)}
                                />
                            </td>
                            <td scope="col">{this.formatNumber(rider.wood * this.state.amounts.riders[i])}</td>
                            <td scope="col">{this.formatNumber(rider.meat * this.state.amounts.riders[i])}</td>
                            <td scope="col">{this.formatNumber(rider.mana * this.state.amounts.riders[i])}</td>
                            <td scope="col">{this.formatNumber(rider.stone * this.state.amounts.riders[i])}</td>
                            <td scope="col">{this.formatNumber(rider.ivory * this.state.amounts.riders[i])}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.riders[i] * this.state.amounts.riders[i])}</td>
                          </tr>
                        </React.Fragment>
                      )

                    })}

                       <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.formatNumber(this.state.totals.riders.total_rss.wood)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.riders.total_rss.meat)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.riders.total_rss.mana)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.riders.total_rss.stone)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.riders.total_rss.ivory)}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.riders.total_time)}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-header">
                <h1 id="tables">Shaman</h1>
              </div>

              <div className="bs-component">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Time</th>
                      <th scope="col"><div className="icon wood"></div></th>
                      <th scope="col"><div className="icon meat"></div></th>
                      <th scope="col"><div className="icon mana"></div></th>
                      <th scope="col"><div className="icon stone"></div></th>
                      <th scope="col"><div className="icon ivory"></div></th>
                      <th scope="col">Will Take</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.troops.shaman.map((shaman,i) => {
                      return (
                        <React.Fragment>
                          <tr className="table-dark">
                            <td scope="col"><div className={"icon troop " + shaman.class_name} title={shaman.name}></div></td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleChange(i, "oracles", e)}
                                />
                            </td>
                            <td scope="col">
                              <input
                                type="text"
                                pattern="[0-9]*"
                                onChange={(e) => this.handleTimeChange(i, "oracles", e)}
                                />
                            </td>
                            <td scope="col">{this.formatNumber(shaman.wood * this.state.amounts.oracles[i])}</td>
                            <td scope="col">{this.formatNumber(shaman.meat * this.state.amounts.oracles[i])}</td>
                            <td scope="col">{this.formatNumber(shaman.mana * this.state.amounts.oracles[i])}</td>
                            <td scope="col">{this.formatNumber(shaman.stone * this.state.amounts.oracles[i])}</td>
                            <td scope="col">{this.formatNumber(shaman.ivory * this.state.amounts.oracles[i])}</td>
                            <td scope="col">{this.secondsToHours(this.state.timers.oracles[i] * this.state.amounts.oracles[i])}</td>
                          </tr>
                        </React.Fragment>
                      )

                    })}
                     <tr className="table-success">
                        <td scope="col">Totals</td>
                        <td scope="col">-</td>
                        <td scope="col">-</td>
                        <td scope="col">{this.formatNumber(this.state.totals.oracles.total_rss.wood)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.oracles.total_rss.meat)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.oracles.total_rss.mana)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.oracles.total_rss.stone)}</td>
                        <td scope="col">{this.formatNumber(this.state.totals.oracles.total_rss.ivory)}</td>
                        <td scope="col">{this.secondsToHours(this.state.totals.oracles.total_time)}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

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
