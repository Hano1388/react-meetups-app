import Card from '../wrappers/Card';
import classNames from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={classNames.form}>
        <div className={classNames.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classNames.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" />
        </div>
        <div className={classNames.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classNames.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="6"></textarea>
        </div>

        <div className={classNames.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
