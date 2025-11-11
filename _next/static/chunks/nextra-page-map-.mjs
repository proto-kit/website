import meta from "../../../src/pages/_meta.tsx";
import docs_meta from "../../../src/pages/docs/_meta.tsx";
import docs_advanced_meta from "../../../src/pages/docs/advanced/_meta.tsx";
import docs_architecture_meta from "../../../src/pages/docs/architecture/_meta.tsx";
import docs_library_meta from "../../../src/pages/docs/library/_meta.tsx";
import docs_quickstart_meta from "../../../src/pages/docs/quickstart/_meta.tsx";
import docs_reference_meta from "../../../src/pages/docs/reference/_meta.tsx";
import docs_reference_api_meta from "../../../src/pages/docs/reference/api/_meta.tsx";
import docs_reference_common_meta from "../../../src/pages/docs/reference/common/_meta.tsx";
import docs_reference_deployment_meta from "../../../src/pages/docs/reference/deployment/_meta.tsx";
import docs_reference_indexer_meta from "../../../src/pages/docs/reference/indexer/_meta.tsx";
import docs_reference_library_meta from "../../../src/pages/docs/reference/library/_meta.tsx";
import docs_reference_module_meta from "../../../src/pages/docs/reference/module/_meta.tsx";
import docs_reference_persistance_meta from "../../../src/pages/docs/reference/persistance/_meta.tsx";
import docs_reference_processor_meta from "../../../src/pages/docs/reference/processor/_meta.tsx";
import docs_reference_protocol_meta from "../../../src/pages/docs/reference/protocol/_meta.tsx";
import docs_reference_sdk_meta from "../../../src/pages/docs/reference/sdk/_meta.tsx";
import docs_reference_sequencer_meta from "../../../src/pages/docs/reference/sequencer/_meta.tsx";
import docs_reference_stack_meta from "../../../src/pages/docs/reference/stack/_meta.tsx";
import docs_runtime_meta from "../../../src/pages/docs/runtime/_meta.tsx";
import docs_sequencer_meta from "../../../src/pages/docs/sequencer/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "advanced",
    route: "/docs/advanced",
    children: [{
      data: docs_advanced_meta
    }, {
      name: "protocol",
      route: "/docs/advanced/protocol",
      frontMatter: {
        "sidebarTitle": "Protocol"
      }
    }, {
      name: "state-proofs",
      route: "/docs/advanced/state-proofs",
      frontMatter: {
        "sidebarTitle": "State Proofs"
      }
    }]
  }, {
    name: "architecture",
    route: "/docs/architecture",
    children: [{
      data: docs_architecture_meta
    }, {
      name: "protocol",
      route: "/docs/architecture/protocol",
      frontMatter: {
        "sidebarTitle": "Protocol"
      }
    }, {
      name: "runtime",
      route: "/docs/architecture/runtime",
      frontMatter: {
        "sidebarTitle": "Runtime"
      }
    }, {
      name: "sequencer",
      route: "/docs/architecture/sequencer",
      frontMatter: {
        "sidebarTitle": "Sequencer"
      }
    }]
  }, {
    name: "architecture",
    route: "/docs/architecture",
    frontMatter: {
      "sidebarTitle": "Architecture"
    }
  }, {
    name: "faq",
    route: "/docs/faq",
    frontMatter: {
      "sidebarTitle": "Faq"
    }
  }, {
    name: "library",
    route: "/docs/library",
    children: [{
      data: docs_library_meta
    }, {
      name: "math",
      route: "/docs/library/math",
      frontMatter: {
        "sidebarTitle": "Math"
      }
    }]
  }, {
    name: "provable-code",
    route: "/docs/provable-code",
    frontMatter: {
      "sidebarTitle": "Provable Code"
    }
  }, {
    name: "quickstart",
    route: "/docs/quickstart",
    children: [{
      data: docs_quickstart_meta
    }, {
      name: "app-chain",
      route: "/docs/quickstart/app-chain",
      frontMatter: {
        "sidebarTitle": "App Chain"
      }
    }, {
      name: "client-interaction",
      route: "/docs/quickstart/client-interaction",
      frontMatter: {
        "sidebarTitle": "Client Interaction"
      }
    }, {
      name: "configuration",
      route: "/docs/quickstart/configuration",
      frontMatter: {
        "sidebarTitle": "Configuration"
      }
    }, {
      name: "first-runtime-module",
      route: "/docs/quickstart/first-runtime-module",
      frontMatter: {
        "sidebarTitle": "First Runtime Module"
      }
    }, {
      name: "user-interface",
      route: "/docs/quickstart/user-interface",
      frontMatter: {
        "sidebarTitle": "User Interface"
      }
    }]
  }, {
    name: "quickstart",
    route: "/docs/quickstart",
    frontMatter: {
      "sidebarTitle": "Quickstart"
    }
  }, {
    name: "reference",
    route: "/docs/reference",
    children: [{
      data: docs_reference_meta
    }, {
      name: "api",
      route: "/docs/reference/api",
      children: [{
        data: docs_reference_api_meta
      }, {
        name: "README",
        route: "/docs/reference/api/README",
        frontMatter: {
          "title": "@proto-kit/api"
        }
      }]
    }, {
      name: "common",
      route: "/docs/reference/common",
      children: [{
        data: docs_reference_common_meta
      }, {
        name: "README",
        route: "/docs/reference/common/README",
        frontMatter: {
          "title": "@proto-kit/common"
        }
      }]
    }, {
      name: "deployment",
      route: "/docs/reference/deployment",
      children: [{
        data: docs_reference_deployment_meta
      }, {
        name: "globals",
        route: "/docs/reference/deployment/globals",
        frontMatter: {
          "title": "@proto-kit/deployment"
        }
      }, {
        name: "README",
        route: "/docs/reference/deployment/README",
        frontMatter: {
          "title": "@proto-kit/deployment"
        }
      }]
    }, {
      name: "indexer",
      route: "/docs/reference/indexer",
      children: [{
        data: docs_reference_indexer_meta
      }, {
        name: "README",
        route: "/docs/reference/indexer/README",
        frontMatter: {
          "title": "@proto-kit/indexer"
        }
      }]
    }, {
      name: "library",
      route: "/docs/reference/library",
      children: [{
        data: docs_reference_library_meta
      }, {
        name: "README",
        route: "/docs/reference/library/README",
        frontMatter: {
          "title": "@proto-kit/library"
        }
      }]
    }, {
      name: "module",
      route: "/docs/reference/module",
      children: [{
        data: docs_reference_module_meta
      }, {
        name: "globals",
        route: "/docs/reference/module/globals",
        frontMatter: {
          "title": "@proto-kit/module"
        }
      }, {
        name: "README",
        route: "/docs/reference/module/README",
        frontMatter: {
          "title": "@proto-kit/module"
        }
      }]
    }, {
      name: "persistance",
      route: "/docs/reference/persistance",
      children: [{
        data: docs_reference_persistance_meta
      }, {
        name: "README",
        route: "/docs/reference/persistance/README",
        frontMatter: {
          "title": "@proto-kit/persistance"
        }
      }]
    }, {
      name: "processor",
      route: "/docs/reference/processor",
      children: [{
        data: docs_reference_processor_meta
      }, {
        name: "README",
        route: "/docs/reference/processor/README",
        frontMatter: {
          "title": "@proto-kit/processor"
        }
      }]
    }, {
      name: "protocol",
      route: "/docs/reference/protocol",
      children: [{
        data: docs_reference_protocol_meta
      }, {
        name: "globals",
        route: "/docs/reference/protocol/globals",
        frontMatter: {
          "title": "@proto-kit/protocol"
        }
      }, {
        name: "README",
        route: "/docs/reference/protocol/README",
        frontMatter: {
          "title": "@proto-kit/protocol"
        }
      }]
    }, {
      name: "sdk",
      route: "/docs/reference/sdk",
      children: [{
        data: docs_reference_sdk_meta
      }, {
        name: "globals",
        route: "/docs/reference/sdk/globals",
        frontMatter: {
          "title": "@proto-kit/sdk"
        }
      }, {
        name: "README",
        route: "/docs/reference/sdk/README",
        frontMatter: {
          "title": "@proto-kit/sdk"
        }
      }]
    }, {
      name: "sequencer",
      route: "/docs/reference/sequencer",
      children: [{
        data: docs_reference_sequencer_meta
      }, {
        name: "globals",
        route: "/docs/reference/sequencer/globals",
        frontMatter: {
          "title": "@proto-kit/sequencer"
        }
      }, {
        name: "README",
        route: "/docs/reference/sequencer/README",
        frontMatter: {
          "title": "@proto-kit/sequencer"
        }
      }]
    }, {
      name: "stack",
      route: "/docs/reference/stack",
      children: [{
        data: docs_reference_stack_meta
      }, {
        name: "globals",
        route: "/docs/reference/stack/globals",
        frontMatter: {
          "title": "@proto-kit/stack"
        }
      }, {
        name: "README",
        route: "/docs/reference/stack/README",
        frontMatter: {
          "title": "@proto-kit/stack"
        }
      }]
    }]
  }, {
    name: "runtime",
    route: "/docs/runtime",
    children: [{
      data: docs_runtime_meta
    }, {
      name: "composability",
      route: "/docs/runtime/composability",
      frontMatter: {
        "sidebarTitle": "Composability"
      }
    }, {
      name: "methods",
      route: "/docs/runtime/methods",
      frontMatter: {
        "sidebarTitle": "Methods"
      }
    }, {
      name: "network-transaction",
      route: "/docs/runtime/network-transaction",
      frontMatter: {
        "sidebarTitle": "Network Transaction"
      }
    }, {
      name: "provable-events",
      route: "/docs/runtime/provable-events",
      frontMatter: {
        "sidebarTitle": "Provable Events"
      }
    }, {
      name: "state",
      route: "/docs/runtime/state",
      frontMatter: {
        "sidebarTitle": "State"
      }
    }, {
      name: "testing",
      route: "/docs/runtime/testing",
      frontMatter: {
        "sidebarTitle": "Testing"
      }
    }]
  }, {
    name: "runtime",
    route: "/docs/runtime",
    frontMatter: {
      "sidebarTitle": "Runtime"
    }
  }, {
    name: "sequencer",
    route: "/docs/sequencer",
    children: [{
      data: docs_sequencer_meta
    }, {
      name: "workers",
      route: "/docs/sequencer/workers",
      frontMatter: {
        "sidebarTitle": "Workers"
      }
    }]
  }, {
    name: "tutorials",
    route: "/docs/tutorials",
    frontMatter: {
      "sidebarTitle": "Tutorials"
    }
  }, {
    name: "what-is-protokit",
    route: "/docs/what-is-protokit",
    frontMatter: {
      "sidebarTitle": "What Is Protokit"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];