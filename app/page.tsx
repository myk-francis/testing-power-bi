"use client";
import Image from "next/image";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "d90d3b4d-dd3e-46db-90cc-0cf63d7935c8",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=d90d3b4d-dd3e-46db-90cc-0cf63d7935c8&groupId=18116d7c-94ff-46ce-8732-0f023fe9d2d0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzQ3YjEyNTEtNWRmNC00MzMwLTllMTktYzNjZjI4YjMxODUyLyIsImlhdCI6MTcyNDY1NDQ2MywibmJmIjoxNzI0NjU0NDYzLCJleHAiOjE3MjQ2NTgzNjksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUE3ZFFJNjV2ZjBPN2piQlFvb3lIeUZrSmJoSnF2NlB2Sy9OTHppc0VPVjY5Skk3NnZQZlZZd1FhWnhra1dBRFlwck9icGN3VHZZZ2pZTzlFNzZJZW1FS01XUEtkWjM4YVBWRkdNN0JrSEVkQT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJBbmFseXRpY3MiLCJnaXZlbl9uYW1lIjoiTXVuaWJpbGxpbmciLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0MS41OS4xNTQuMTM2IiwibmFtZSI6Ik11bmliaWxsaW5nIEFuYWx5dGljcyIsIm9pZCI6IjdkZGM4NmQzLTRhZGMtNGEzNS1iNWQ5LTllYWY5YTU1MjUyMiIsInB1aWQiOiIxMDAzMjAwMzFEODZBQkQ1IiwicmgiOiIwLkFYMEFVUko3ZFBSZE1FT2VHY1BQS0xNWVVna0FBQUFBQUFBQXdBQUFBQUFBQUFDMUFJOC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJnS2pvVHJ0RXBhaktyNmYtTUJmZEFWTkNlLXp0N196cWo0RWpSYlp1NkY4IiwidGlkIjoiNzQ3YjEyNTEtNWRmNC00MzMwLTllMTktYzNjZjI4YjMxODUyIiwidW5pcXVlX25hbWUiOiJtdW5pYmlsbGluZy5hbmFseXRpY3NAY3Jlc3RsaW5lc29mdHdhcmUub25taWNyb3NvZnQuY29tIiwidXBuIjoibXVuaWJpbGxpbmcuYW5hbHl0aWNzQGNyZXN0bGluZXNvZnR3YXJlLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Im4zNU5aSXhDT0UyVEMzalBSZ1ZmQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImYyZWY5OTJjLTNhZmItNDZiOS1iN2NmLWExMjZlZTc0YzQ1MSIsImE5ZWE4OTk2LTEyMmYtNGM3NC05NTIwLThlZGNkMTkyODI2YyIsIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDE2IiwieG1zX3BsIjoiZW4tVVMifQ.F56i4PcLJq2nqgKr3VfYAhnNFbOQfPZOJv2gF_gR05uV5n82Jxu4gpSmcpXKNRK1o4NxWGuicqB0unAA88aP-7W56n8dxoIQ2HjSPSmDQNq0gSs011rjevRLQmWRiN-EYvKcv3U5AAfzrps4_wTkPhQOTDHd1M-QL_iidzIcJ4ZJuRWq9jb7B4KK4QP3u_O39S5kXF5kFXp5S9vddasp04aY1Q-El6sNZpuOcLwqIpHWpkZw3fNR8mubLSKj51R3TpC50VOWvTJCL5gE7AIgZ7KAlOhWZBZpRch_Bz8jhsNxS-Z3QufWv7htvGX15g-NZ5X7AJVkeC7xNLWSNy3f8w",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed

          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event: any) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          //@ts-ignore
          window.report = embeddedReport as Report;
        }}
      />
    </main>
  );
}
