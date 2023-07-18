import { useRef } from 'react';
import Card from '../wrappers/Card';
import classNames from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(newMeetup);
  };
  return (
    <Card>
      <form className={classNames.form} onSubmit={submitHandler}>
        <div className={classNames.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classNames.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classNames.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classNames.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="6"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classNames.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
