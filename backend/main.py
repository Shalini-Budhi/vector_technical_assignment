from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Node(BaseModel):
    id: str

    class Config:
        extra = "ignore"


class Edge(BaseModel):
    source: str
    target: str

    class Config:
        extra = "ignore"


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_dag(node_ids: List[str], edges: List[Edge]) -> bool:
    adj = {nid: [] for nid in node_ids}
    indegree = {nid: 0 for nid in node_ids}

    for edge in edges:
        if edge.source not in adj or edge.target not in adj:
            continue
        adj[edge.source].append(edge.target)
        indegree[edge.target] += 1

    queue = [nid for nid in node_ids if indegree[nid] == 0]
    visited_count = 0

    while queue:
        current = queue.pop(0)
        visited_count += 1

        for neighbor in adj[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(node_ids)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    node_ids = [n.id for n in pipeline.nodes]
    num_nodes = len(node_ids)
    num_edges = len(pipeline.edges)
    dag = is_dag(node_ids, pipeline.edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}

