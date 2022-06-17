/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./calendar.css"
import { now } from 'jquery';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// import {User,Avatar_19,Avatar_07,Avatar_06,Avatar_14} from '../../../Entryfile/imagepath.js'

class CalendarPage extends Component {
  
  state = {
    iseditdelete : false,
    addneweventobj:null,
    isnewevent:false,
    event_title:"",
    category_color:'',
    weekendsVisible: true,
    currentEvents: [],
    defaultEvents :  [{
      title: 'Event Name 4',
      start: new Date(now() + 148000000),
      className: 'bg-purple'
  },
  {
      title: 'Test Event 1',
      start: new Date(now()),
      end: new Date(now()),
      className: 'bg-success'
  },
  {
      title: 'Test Event 2',
      start: new Date(now() + 168000000),
      className: 'bg-info'
  },
  {
      title: 'Test Event 3',
      start: new Date(now() + 338000000),
      className: 'bg-primary'
  }]
  }
  handleDateSelect = (selectInfo) => {
    this.setState({
      isnewevent : true,
      addneweventobj : selectInfo
    }) 
    
  }
  addnewevent(){
    const{event_title,category_color,addneweventobj } = this.state
      let calendarApi = addneweventobj.view.calendar

        calendarApi.unselect() // clear date selection

        if (event_title) {
          calendarApi.addEvent({
            id: 10,
            title : event_title,
            className: category_color,
            start: addneweventobj.startStr,
            end: addneweventobj.endStr,
            allDay: addneweventobj.allDay
          })
        }   
       this.setState({isnewevent : false})
  }
  
  onupdateModalClose() {
    this.setState({
      iseditdelete : false,
      event_title :""
    })  
  }
  oncreateeventModalClose() {
    this.setState({
      isnewevent : false,
      event_title :""
    })  
  }
  handleEventClick = (clickInfo) => {    
    this.setState({
      iseditdelete : true,
      event_title : clickInfo.event.title,
      calenderevent : clickInfo.event
    })    
  }
  removeevent(){
    const{calenderevent } = this.state
      calenderevent.remove()
      this.setState({iseditdelete : false})
  }
  clickupdateevent(){
    const{defaultEvents,calenderevent,event_title } = this.state
    const newArray = defaultEvents
    for(let i=0;i<newArray.length;i++){
      if(newArray[i].id === parseInt(calenderevent.id)){
        newArray[i].title = event_title
      }
    }
    this.setState({defaultEvents : newArray,iseditdelete:false})

  }
  
   render() {
    const{defaultEvents,iseditdelete,isnewevent } = this.state
    return (
         <div className="page-wrapper">
              <Helmet>
                    <title>Events - HRMS Admin Template</title>
                    <meta name="description" content="Chat"/>					
              </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Events</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Events</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_event"><i className="fa fa-plus" /> Add Event</a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* Calendar */}
                          {/* <div id="calendar" /> */}
                          <FullCalendar
                              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                              headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                              }}
                              data-target="#add_event"
                              initialView='dayGridMonth'
                              editable={true}
                              selectable={true}
                              selectMirror={true}
                              dayMaxEvents={true}
                              weekends={this.state.weekendsVisible}
                              initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                              select={this.handleDateSelect}
                              // eventContent={renderEventContent} // custom render function
                              eventClick={clickInfo=>this.handleEventClick(clickInfo)}
                              // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                              /* you can update a remote database when these fire:
                              eventAdd={function(){}}
                              eventChange={function(){}}
                              eventRemove={function(){}}
                              */
                            />
                          {/* /Calendar */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            {/* Add Event Modal */}
            <div id="add_event" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Event</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>Event Name <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Event Date <span className="text-danger">*</span></label>
                        <div className="cal-icon">
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Category</label>
                        <select className="select form-control">
                          <option>Danger</option>
                          <option>Success</option>
                          <option>Purple</option>
                          <option>Primary</option>
                          <option>Pink</option>
                          <option>Info</option>
                          <option>Inverse</option>
                          <option>Orange</option>
                          <option>Brown</option>
                          <option>Teal</option>
                          <option>Warning</option>
                        </select>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add Event Modal */}
            {/* Event Modal */}
            <div className="modal custom-modal fade" id="event-modal">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Event</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer text-center">
                    <button type="button" className="btn btn-success submit-btn save-event">Create event</button>
                    <button type="button" className="btn btn-danger submit-btn delete-event" data-dismiss="modal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Event Modal */}
            {/* Add Category Modal*/}
            <div className="modal custom-modal fade" id="add-category">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Add a category</h4>
                  </div>
                  <div className="modal-body p-20">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="col-form-label">Category Name</label>
                          <input className="form-control" placeholder="Enter name" type="text" name="category-name" />
                        </div>
                        <div className="col-md-6">
                          <label className="col-form-label">Choose Category Color</label>
                          <select className="form-control" data-placeholder="Choose a color..." name="category-color">
                            <option value="success">Success</option>
                            <option value="danger">Danger</option>
                            <option value="info">Info</option>
                            <option value="pink">Pink</option>
                            <option value="primary">Primary</option>
                            <option value="warning">Warning</option>
                            <option value="orange">Orange</option>
                            <option value="brown">Brown</option>
                            <option value="teal">Teal</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger save-category" data-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add Category Modal*/}
            {/* {Event Click} */}
            <Modal centered isOpen={iseditdelete} >
                <ModalHeader toggle={() => this.onupdateModalClose()}> 
                    Event
                </ModalHeader>
                <ModalBody>
                        {this.rendereventclick()}
                </ModalBody>  
                <ModalFooter>
                    <button type="button" className="btn btn-danger submit-btn delete-event" 
                        data-dismiss="modal" onClick={()=>this.removeevent()}>Delete</button>
                </ModalFooter>           
            </Modal> 
            <Modal centered isOpen={isnewevent} >
                <ModalHeader toggle={() => this.oncreateeventModalClose()}> 
                    Event
                </ModalHeader>
                <ModalBody>
                        {this.renderaddnewevent()}
                </ModalBody>  
                <ModalFooter>
                    <button type="button" className="btn btn-success submit-btn delete-event" 
                        data-dismiss="modal" onClick={()=>this.addnewevent()}>Create event</button>
                </ModalFooter>           
            </Modal> 
          </div>
      );
   }
   rendereventclick(){
    const{event_title} = this.state
        
    return(
     <form className='event-form'>
       <label>Change event name</label>
       <div className='input-group'>
         <input className='form-control' type="text" value={event_title} 
         onChange={(event) => this.setState({ event_title: event.target.value })} />
         <span className='input-group-append'>
           <button type="button" className='btn btn-success btn-md'
             onClick={()=>this.clickupdateevent()}>Save</button>
         </span>
       </div>
     </form>
    )
  }
  renderaddnewevent(){
   const{event_title,category_color} = this.state
       
      return(
        <form>
          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label className='control-label'>Event Name</label>
                <input className='form-control' type='text' name='title' value={event_title} 
                    onChange={(event) => this.setState({ event_title: event.target.value })}/>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <label className='control-label'>Category</label>
                <select className='select form-control' name='category'
                  onChange={(event) => this.setState({ category_color: event.target.value })}>
                  <option value='bg-danger'>Danger</option>
                  <option value='bg-success'>Success</option>
                  <option value='bg-purple'>Purple</option>
                  <option value='bg-primary'>Primary</option>
                  <option value='bg-pink'>Pink</option>
                  <option value='bg-info'>Info</option>
                  <option value='bg-inverse'>Inverse</option>
                  <option value='bg-orange'>Orange</option>
                  <option value='bg-brown'>Brown</option>
                  <option value='bg-teal'>Teal</option>
                  <option value='bg-warning'>Warning</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      )
 }
}

export default CalendarPage;
