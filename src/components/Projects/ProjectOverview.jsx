import React from 'react';
import Moment from 'react-moment';
import ProjectOverviewStyles from './ProjectOverview.style';

export default function ProjectOverview(props) {
  const { project } = props;
  const timestampFormat = 'ddd, MMM M, YYYY @ h:mm a';
  return (
    <ProjectOverviewStyles>
      <div className="project__banner">
        <img src={project.imageSrc} alt="" className="project__banner__image" />
      </div>
      <div className="project__details">
        <div className="project__info">
          <span className="project__section__title">Project Details</span>
          <h2 className="project__title">{project.title}</h2>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__description">{project.description}</p>
        </div>
        <div className="project__stats">
          <span className="project__section__title">Project Info</span>
          <div className="project__stat">
            <span className="project__stat__name">Members</span>
            <span className="project__stat__value">{project.members}</span>
          </div>
          <div className="project__stat">
            <span className="project__stat__name">Status</span>
            <span className="project__stat__value">{project.status}</span>
          </div>
          <div className="project__stat">
            <span className="project__stat__name">Membership</span>
            <span className="project__stat__value">{project.membership}</span>
          </div>
        </div>
        <div className="project__discussion">
          <span className="project__section__title">Project Discussion</span>
          {project.comments.length === 0 ? <span>No Comments</span> : null}
          {project.comments
            .sort((a, b) => b.timestamp - a.timestamp)
            .map(comment => (
              <div key={comment.timestamp} className="comment">
                <div className="comment__header">
                  <div className="profile__menu">
                    <img src={comment.user.avatar} alt="profile" className="profile__menu__image" />
                  </div>
                  <div className="comment__details">
                    <span className="comment__user__name">{comment.user.name}</span>
                    <span className="comment__timestamp">
                      <Moment format={timestampFormat}>{comment.timestamp}</Moment>
                    </span>
                  </div>
                </div>
                <p className="comment__content">{comment.comment}</p>
                {comment.replies.length > 0 ? (
                  <div className="comment__replies">
                    <span className="project__section__title">Replies</span>
                    {comment.replies
                      .sort((a, b) => b.timestamp - a.timestamp)
                      .map(reply => (
                        <div key={reply.timestamp} className="comment">
                          <div className="comment__header">
                            <div className="profile__menu">
                              <img
                                src={reply.user.avatar}
                                alt="profile"
                                className="profile__menu__image"
                              />
                            </div>
                            <div className="comment__details">
                              <span className="comment__user__name">{reply.user.name}</span>
                              <span className="comment__timestamp">
                                <Moment format={timestampFormat}>{reply.timestamp}</Moment>
                              </span>
                            </div>
                          </div>
                          <p className="comment__content">{reply.comment}</p>
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </ProjectOverviewStyles>
  );
}
