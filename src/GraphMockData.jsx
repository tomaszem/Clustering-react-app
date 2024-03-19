// Mock Data for the Knowledge Graph
const mockData = {
    nodes: [
      { id: "author1", label: "Dr. Jane Doe", group: "author" },
      { id: "author2", label: "Dr. John Smith", group: "author" },
      { id: "author3", label: "Dr. Jim Ryan", group: "author" },
      { id: "paper1", label: "Exploring the Universe", group: "paper" },
      { id: "paper2", label: "The Mystery of Quantum Physics", group: "paper" },
      { id: "source1", label: "Cosmology Today", group: "source" },
      { id: "source2", label: "Quantum Mechanics Monthly", group: "source" },
    ],
    links: [
      { source: "author1", target: "paper1", label: "authored" },
      { source: "author2", target: "paper1", label: "authored" },
      { source: "author2", target: "paper2", label: "authored" },
      { source: "author3", target: "paper2", label: "authored" },
      { source: "paper1", target: "source1", label: "published in" },
      { source: "paper2", target: "source2", label: "published in" },
    ],
  };
  
  export default mockData;
  