/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import {User} from "../../Entryfile/imagepath"

class KnowledgebaseView extends Component {

   render() {     
      return ( 
        <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Knowledgebase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                  <li className="breadcrumb-item active">Knowledgebase</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Content Starts */}
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <article className="post">
                    <h1 className="post-title">Lorem ipsum dolor sit amet </h1>
                    <ul className="meta">
                      <li><span>Created :</span> Feb, 04, 2016</li>
                      <li><span>Category:</span> <a href="/purple/app/administrator/knowledgebase-view">Category 1</a>, <a href="/purple/app/administrator/knowledgebase-view">Category 2</a></li>
                      <li><span>Last Updated:</span> April, 15, 2016</li>
                      <li><span>Comments :</span> <a href="/purple/app/administrator/knowledgebase-view">5</a></li>
                      <li><span>Views :</span> 1198</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <h2>Sed ut perspiciatis unde omnis iste</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <h2>Sed ut perspiciatis unde omnis iste</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </article>
                  <div className="feedback">
                    <h3>Was this article helpful to you?</h3>
                    <p>
                      <a href="/purple/app/administrator/knowledgebase-view" className="btn btn-success mr-1"><i className="fa fa-thumbs-up" /></a>
                      <a href="/purple/app/administrator/knowledgebase-view" className="btn btn-danger"><i className="fa fa-thumbs-down" /></a>
                    </p>
                    <p>29 found this helpful</p>
                  </div>
                  <div className="comment-section">
                    <div className="comments-area clearfix">
                      <h3>( 2 ) Comments</h3>
                      <ul className="comment-list">
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img width={86} height={86} className="avatar avatar-86 photo" src={User} alt="" />
                            </div>
                            <div className="comment-details">
                              <div className="author-name">
                                <a className="url" href="/purple/app/administrator/knowledgebase-view">John Doe</a> <span className="commentmetadata">October 25, 2016 at 01:10 pm</span>
                              </div>
                              <div className="comment-body">
                                <p>Integer id dolor libero. Cras in turpis nulla. Vivamus at tellus erat. Nulla ligula sem, eleifend vitae semper et, blandit a elit. Nam et ultrices lectus. Ut sit amet risus eget neque scelerisque consectetur.</p>
                              </div>
                              <div className="reply"><a href="/purple/app/administrator/knowledgebase-view" className="comment-reply-link" rel="nofollow"><i className="fa fa-reply" /> Reply</a></div>
                            </div>
                          </div>
                          <ul className="children">
                            <li>
                              <div className="comment">
                                <div className="comment-author">
                                  <img width={86} height={86} className="avatar avatar-86 photo" src={User} alt="" />
                                </div>
                                <div className="comment-details">
                                  <div className="author-name">
                                    <a href="/purple/app/administrator/knowledgebase-view" className="comment-reply-link" /><a className="url" href="/purple/app/administrator/knowledgebase-view">Astin Robert</a> <span className="commentmetadata">October 25, 2016 at 01:10 pm</span>
                                  </div>
                                  <div className="comment-body">
                                    <p>Mauris hendrerit consequat quam, sit amet fermentum metus cursus in. Nunc ac justo suscipit erat sagittis maximus a at tellus. Pellentesque congue nisi a nisl volutpat tempor.</p>
                                  </div>
                                  <div className="reply"><a href="/purple/app/administrator/knowledgebase-view" className="comment-reply-link"><i className="fa fa-reply" /> Reply</a></div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="comment-reply">
                        <h3 className="comment-reply-title">Leave a Reply</h3>
                        <form>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input type="text" id="website" name="website" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="comment">Comment *</label>
                            <textarea id="comment" name="comment" className="form-control" rows={3} cols={5} defaultValue={""} />
                          </div>
                          <div className="submit-section">
                            <button type="submit" className="btn btn-primary submit-btn">Post Comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-sidebar">
                <div className="widget widget-category">
                  <h4 className="widget-title"><i className="fa fa-folder-o" /> Categories</h4>
                  <ul>
                    <li>
                      <a href="/purple/app/administrator/knowledgebase-view">Categories 1</a>
                    </li>
                    <li>
                      <a href="/purple/app/administrator/knowledgebase-view">Categories 2</a>
                    </li>
                    <li>
                      <a href="/purple/app/administrator/knowledgebase-view">Categories 3</a>
                    </li>
                    <li>
                      <a href="/purple/app/administrator/knowledgebase-view">Categories 4</a>
                    </li>
                    <li>
                      <a href="/purple/app/administrator/knowledgebase-view">Categories 5</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-category">
                  <h4 className="widget-title"><i className="fa fa-folder-o" /> Popular Articles</h4>
                  <ul>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Installation &amp; Activation </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Premium Members Features </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> API Usage &amp; Guide lines </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Getting Started &amp; What is next. </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Installation &amp; Activation </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Premium Members Features </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> API Usage &amp; Guide lines </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Getting Started &amp; What is next. </a></li>
                  </ul>
                </div>
                <div className="widget widget-category">
                  <h4 className="widget-title"><i className="fa fa-folder-o" /> Latest Articles</h4>
                  <ul>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Installation &amp; Activation </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Premium Members Features </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> API Usage &amp; Guide lines </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Getting Started &amp; What is next. </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Installation &amp; Activation </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Premium Members Features </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> API Usage &amp; Guide lines </a></li>
                    <li><a href="/purple/app/administrator/knowledgebase-view"> Getting Started &amp; What is next. </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
      );
   }
}

export default KnowledgebaseView;
