import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import ProjectOverviewStyles from './ProjectOverview.style';
import { ProfileMenu } from '..';

export default function ProjectOverview(props) {
  const { project, setView } = props;
  const timestampFormat = 'ddd, MMM M, YYYY @ h:mm a';
  const [prevProject, setPrevProject] = useState(null);
  useEffect(() => {
    if (!Object.is(project, prevProject)) {
      document.querySelectorAll('.scroll__wrapper')[1].scrollTop = 0;
      document.querySelectorAll('.scroll__wrapper')[2].scrollTop = 0;
      setPrevProject(project);
    }
  });
  return (
    <ProjectOverviewStyles>
      <button className="view__toggle__button" type="button" onClick={() => setView('list')}>
        <i className="fas fa-caret-left view__toggle" />
        Back
      </button>
      <div className="project__banner">
        {/* <img src={projectBanner} alt="" className="project__banner__image" /> */}
      </div>
      <div className="project__details">
        <div className="project__info">
          <span className="project__section__title">Project Overview</span>
          <h2 className="project__title">{project.title}</h2>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__description">{project.description}</p>
          <div className="project__members">
            <span className="project__section__title">Project Members</span>
            <div className="scroll__wrapper scroll__wrapper--inner">
              <div className="project__member__list">
                {project.members.map(member => (
                  <div key={member.firstName} className="project__member">
                    <ProfileMenu key={member.id} user={member} size={100} />
                    <span className="project__member__name">{member.firstName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="project__stats">
          <span className="project__section__title">Project Stats</span>
          <div className="project__stat">
            <span className="project__stat__name">Members</span>
            <span className="project__stat__value">{project.members.length}</span>
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
                  <ProfileMenu user={comment.user} size={50} />
                  <div className="comment__details">
                    <span className="comment__user__name">{comment.user.firstName}</span>
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
                            <ProfileMenu user={reply.user} size={50} />
                            <div className="comment__details">
                              <span className="comment__user__name">{reply.user.firstName}</span>
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
