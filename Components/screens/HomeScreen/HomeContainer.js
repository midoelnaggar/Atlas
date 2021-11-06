import React, { useState, useEffect, useContext } from "react";
import Category from "./Category";
import { ScrollView, HStack, Box, Text } from "native-base";
import { RefreshControl } from "react-native";
import axios from "axios";
import Spinner from "../../helpers/Spinner";
import { LoadingContext, RefreshingContext } from "../../helpers/Context";

export default () => {
  const [catData, setCatData] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);
  const { refreshing, setRefreshing } = useContext(RefreshingContext);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCatsRefresh();
  }, []);

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    try {
      await axios
        .get("http://Api.danofa.repl.co/api/v1/category")
        .then((response) => {
          setCatData(response.data.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getCatsRefresh() {
      try {
        await
        setRefreshing(false);
        setLoading(true);        
           axios
          .get("http://Api.danofa.repl.co/api/v1/category")
          .then((response) => {
            setCatData(response.data.data);
            setLoading(false);        
          });
      } catch (error) {
        console.error(error);
      }
    }
  let homeCats = catData.filter((cat) => {
    return cat.parent === undefined ;
  });
  const sortedHomeCats = homeCats.sort((a,b)=>b.rank-a.rank)
  const catList = sortedHomeCats.map((cat) => {
    return <Category imageUri={cat.img} key={cat.rank} J={cat.id} name={cat.name} />;
  });

  return loading ? (
    <Spinner />
  ) : (
    <Box>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HStack flexDirection="row-reverse" flexWrap="wrap" padding="5px">
          {catList}
        </HStack>
      </ScrollView>
    </Box>
  );
};
