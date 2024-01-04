import { createSignal } from "solid-js";
import "./Counter.css";

export default function Search() {
  return (
    <main>
      <gen-search-widget configId="e87290e1-397b-4a9d-87d6-57d94359299f" triggerId="searchWidgetTrigger"></gen-search-widget>

      <input placeholder="Search here" id="searchWidgetTrigger" />
    </main>
  );
  );
}
