import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights</Title>
      <gen-search-widget
        configId="e87290e1-397b-4a9d-87d6-57d94359299f"
        location="us"
        triggerId="searchWidgetTrigger">
      </gen-search-widget>

     
<div class="wrapper">
  <div class="container">
    <div class="flexbox">
      <div class="search">
        <h1>Discover Client Insights</h1>
        <h3> Click on search icon, prompt what you want to know about a client <span class="blinking-cursor"> |</span></h3>
        <div>
          <input type="text" id="searchWidgetTrigger" placeholder="Discover . . ."  />
        </div>
      </div>
      <div id="facet_results"></div>
    </div>
   </div>
</div>
    </main>
  );
}
