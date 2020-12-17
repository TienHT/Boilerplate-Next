import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getStaff } from '../../api/staffApi'
import Link from 'next/link'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '120%', // 16:9
  },
  cardContent: {
    flexGrow: 1,

  },
  button: {
    color: 'var(--background)',
    outline: 'none !important'
  }

}));

const index = (props) => {
  const classes = useStyles();
  const [singers, setSingers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStaff()
      setSingers(data)
    }
    fetchData()
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              Danh Sách Chuyên Gia
          </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} align='center' maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {singers.map((singer, key) =>
              <Grid item key={key} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={singer.avatarImage}
                    title={singer.id}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {singer.fullName}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Link href={`/professor/${singer.id}`} >
                      <Button size="medium" align='center' className={classes.button}>
                        Xem Chi Tiết
                  </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: 'Danh Sách Chuyên Gia'
    },
  }
}
export default index;
