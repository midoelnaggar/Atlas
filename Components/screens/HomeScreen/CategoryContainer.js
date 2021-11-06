import React, { useState, useEffect, useContext } from "react";
import Category from "./Category";
import { ScrollView, HStack, Box } from "native-base";
import { RefreshControl } from "react-native";
import axios from "axios";
import Spinner from "../../helpers/Spinner";
import { LoadingContext, RefreshingContext } from "../../helpers/Context";
import { useRoute } from "@react-navigation/native";
import BackBar from "../../bars/BackBar";
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
      await setLoading(true);
      axios
        .get(`http://Api.danofa.repl.co/api/v1/category/parent/${key}`)
        .then((response) => {
          setCatData(response.data.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }
  const route = useRoute();
  const { key, catName } = route.params;

  async function getCatsRefresh() {
    try {
      await setRefreshing(false);
      setLoading(true);
      axios
        .get(`http://Api.danofa.repl.co/api/v1/category/parent/${key}`)
        .then((response) => {
          setCatData(response.data.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }
  const catList = catData.map((cat) => {
    return (
      <Category imageUri={cat.img} key={cat.name} J={cat.id} name={cat.name} />
    );
  });

  return loading ? (
    <Spinner />
  ) : (
    <>
      <BackBar catName={catName} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <HStack flexDirection="row-reverse" flexWrap="wrap" h="full">
            {catList}
          </HStack>
        </ScrollView>
    </>
  );
};
