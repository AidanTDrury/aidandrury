import './App.css';

import Person from './layouts/person';
import Bio from './layouts/bio';
import Skills from './layouts/skills';
import Projects from './layouts/projects';
import About from './layouts/about';

import { 
  Container,
  Grid,
} from '@mui/material';

function App() {
  const name = "Aidan Drury";
  const role = "Junior Softwate Developer";
  const me = "something"
  const message = "Hey! I make things for the web and am an aspiring machine learning researcher."

  const content = "Highly motivated by personal achievement with an energetic approach to hard work and excited by new challenges. I am looking to pivot my commercial career experience into a path more suited to my studies and aspirations. Proven to be keen to expand my knowledge;  agile in adopting standards & processes whilst participating well as a team player; and priding myself on a strong work ethic. Due to my self learning, I have excelled my natural analytical mindset and have broadened my knowledge whilst increasing my want to learn more."

  const languages = [["JavaScript","1"], ["Python","2"], ["SQL","3"], ["Html","4"], ["CSS","5"]];
  const frameworks = [["React","1"], ["Flask","2"], ["Node (express)","3"]];
  const libraries = [["Redux","1"], ["Material UI","2"], ["Chakra UI","3"]];
  const dataAnalytics = [["NumPy","1"], ["Pandas","2"], ["Matplotlib","3"]];
  const databases = [["MSSQL","1"], ["Google Firebase","2"]];

  const projects = [
    {
      name: "Financial Stock Data Scraper API",
      date: "04/2022 - Present",
      description: "A pluggable API where an application can request data for a specific stock and what type of information from a selected list of data they want to receive.",
      technologies: "Python (& appropriate modules), Flask",
      img: null
    },
  ];

  const interests = "I enjoy partaking in swimming, snowboarding, gold prospecting and love tv and music. I also have a huge interest in stocks and future technologies such as renewable energy methods";

  return (
    <Container maxWidth="sm" sx={{paddingBottom:8}}>
      <Person name={ name } role={ role } me={ me } message={ message } />
      <Grid container margin="auto">
          <Grid item xs={12} md={12}>
            <Bio heading="Summary" content={ content }/>
          </Grid>
          <Grid item xs={12} md={12}>
              <Skills heading="Skills" languages={ languages } frameworks={ frameworks } libraries={ libraries } dataAnalytics={ dataAnalytics } databases={ databases }/>
          </Grid>
          <Grid item xs={12} md={12}>
              <Projects heading="Projects" projects={ projects } />
          </Grid>
          <Grid item xs={12} md={12}>
            <About heading="About" interests={ interests } />
          </Grid>
      </Grid>
    </Container>
  ); 
}

export default App;
