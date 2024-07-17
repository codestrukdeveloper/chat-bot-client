import GoogleMapReact from "google-map-react";
import { FaSearch } from "react-icons/fa";

import Text from "@/components/Typography/Text";
import { Input } from "@/components/Form/v2/Input";

import {
  VisitorContainer,
  StyledSidebar,
  SearchVisitorInputGroup,
  VisitorStatus,
  VisitorStatusTitle,
  VisitorStatusDesc,
  VisitorContent,
  OnlineUsersBox,
} from "./visitors.style";

function Visitors() {
  return (
    <VisitorContainer>
      <StyledSidebar>
        <SearchVisitorInputGroup>
          <FaSearch />
          <Input placeholder="Search In here" />
        </SearchVisitorInputGroup>
        <VisitorStatus>
          <VisitorStatusTitle>There are no Visitors</VisitorStatusTitle>
          <VisitorStatusDesc>
            Nobody is currently browsing yout website. Your visitors will
            apprear here
          </VisitorStatusDesc>
        </VisitorStatus>
      </StyledSidebar>
      <VisitorContent>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDc6PADHgxNX5UXs-lgJNErxfFojNGdQ2k" }}
          defaultZoom={1}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
        ></GoogleMapReact>
        <OnlineUsersBox>
          <Text>0 Online Users</Text>
          <Text>0 Active Users Now</Text>
        </OnlineUsersBox>
      </VisitorContent>
    </VisitorContainer>
  );
}

export default Visitors;
