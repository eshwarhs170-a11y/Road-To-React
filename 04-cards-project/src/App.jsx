import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandlogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$60/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$70/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj",
    company: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://ninjapng.com/public/storage/front-png/png-clipartmicrosoft-logo-png-windows-office-365-edge-square-icon-white-background-clipart-vector6674244-thumbnail.webp",
    company: "Microsoft",
    datePosted: "4 weeks ago",
    post: "AI Researcher",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$80/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/044/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$48/hour",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    company: "IBM",
    datePosted: "8 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$65/hour",
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/1280px-Oracle_Logo.svg.png",
    company: "Oracle",
    datePosted: "2 days ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
    company: "Adobe",
    datePosted: "7 weeks ago",
    post: "UX Designer",
    tag1: "Part-time",
    tag2: "Senior level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  }
];

console.log(jobOpenings)
  return (
    <div className='parent'>
     {jobOpenings.map(function(elem,idx){
      console.log(idx)

      return (
      <div key={idx}>
        <Card  company={elem.company} location={elem.location} datePosted={elem.datePosted}  post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandlogo} />
      </div>
      )
     })}
    </div>
  )
}

export default App
