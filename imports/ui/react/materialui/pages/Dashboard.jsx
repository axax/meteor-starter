import React from 'react';
import {render} from 'react-dom'
import {Chart} from 'react-google-charts'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: 450,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};


const Dashboard = () => {


  Meteor.call('stockdata', "NASD:GOOG",function(err,data){
    console.log(data);
  });


  return (
    <div style={styles.root}>
      <GridList
      cols={4}
      cellHeight={'auto'}
      padding={1}
      style={styles.gridList}>
      <GridTile
          key={"key"}
          style={styles.titleStyle}
          title={"Test"}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={1}
          rows={1}
      >
          <Chart
            chartType="ScatterChart"
            data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
            options={{}}
            graph_id="ScatterChart"
            width="100%"
            height="400px"
            legend_toggle/>

        </GridTile>
      </GridList>
    </div>
  );
};

export default Dashboard;
