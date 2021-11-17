const listItems = document.querySelectorAll('.item');
const speakers = [
  {

    image: './pics/zlaner.jpg',
    name: 'Zach Laner',
    job: 'Youtuber and back to back tournament champion',
    description: 'Zach Laner a.k.a zlaner is a skilled youtube streamer and has won multiple tournaments',
  },
  {

    image: './pics/doc.jpg',
    name: 'Dr Disrepect',
    job: 'Youtube streamer',
    description: 'The Doc is a back to back 2x 90s champion.',
  },
  {
    image: './pics/tim.jpg',
    name: 'Tim',
    job: 'Streamer',
    description: "Tim also know as 'tim the tatman' is an American streamer",
  },
  {
    image: './pics/jason.jpg',
    name: 'Jason Blundell',
    job: 'Co-Studio Head and Game Director at Treyarch',
    description: 'Blundell started working on the Call of Duty franchise as a Producer for Call of Duty 3. He became Executive Producer on Call of Duty: Black Ops and was one the Campaign Design Directors for Call of Duty: Black Ops II.',
  },
  {
    image: './pics/matthew.jpg',
    name: 'Matthew Lewis',
    job: 'Vice President of Product & GM, Call of Duty: Mobile · Activision',
    description: 'Lewis has been working for activision for a while now and has been appointed to lead the call of duty mobile team',
  },
  {
    image: './pics/amos.jpg.crdownload',
    name: 'Amos Hodge',
    job: 'Director of call of duty warzone',
    description: 'One of the best battle royales ever made, Amos directs warzone and is the game to be played at this tournament',
  },
];
listItems.forEach((speaker) => {
  const speakerId = speaker.getAttribute('id');
  const guestSection = document.querySelectorAll('.guests_section');
  const speakerImage = guestSection.querySelector('.guest_img_div');
  const speakerName = guestSection.querySelector('.name');
  const speakerJob = guestSection.querySelector('.work');
  const speakerDescription = guestSection.querySelector('.work_description');
  speakerImage.src = speakers[speakerId].image;
  speakerName.innerHTML = speakers[speakerId].name;
  speakerJob.innerHTML = speakers[speakerId].job;
  speakerDescription.innerHTML = speakers[speakerId].description;
});