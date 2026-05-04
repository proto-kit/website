import meta from "../../../src/pages/_meta.tsx";
import docs_meta from "../../../src/pages/docs/_meta.tsx";
import docs_advanced_meta from "../../../src/pages/docs/advanced/_meta.tsx";
import docs_architecture_meta from "../../../src/pages/docs/architecture/_meta.tsx";
import docs_concepts_meta from "../../../src/pages/docs/concepts/_meta.tsx";
import docs_library_meta from "../../../src/pages/docs/library/_meta.tsx";
import docs_quickstart_meta from "../../../src/pages/docs/quickstart/_meta.tsx";
import docs_running_meta from "../../../src/pages/docs/running/_meta.tsx";
import docs_runtime_meta from "../../../src/pages/docs/runtime/_meta.tsx";
import docs_sequencer_meta from "../../../src/pages/docs/sequencer/_meta.tsx";
import docs_settlement_meta from "../../../src/pages/docs/settlement/_meta.tsx";
import reference_meta from "../../../src/pages/reference/_meta.tsx";
import reference_api_meta from "../../../src/pages/reference/api/_meta.tsx";
import reference_cli_meta from "../../../src/pages/reference/cli/_meta.tsx";
import reference_common_meta from "../../../src/pages/reference/common/_meta.tsx";
import reference_deployment_meta from "../../../src/pages/reference/deployment/_meta.tsx";
import reference_indexer_meta from "../../../src/pages/reference/indexer/_meta.tsx";
import reference_library_meta from "../../../src/pages/reference/library/_meta.tsx";
import reference_module_meta from "../../../src/pages/reference/module/_meta.tsx";
import reference_persistance_meta from "../../../src/pages/reference/persistance/_meta.tsx";
import reference_processor_meta from "../../../src/pages/reference/processor/_meta.tsx";
import reference_protocol_meta from "../../../src/pages/reference/protocol/_meta.tsx";
import reference_sdk_meta from "../../../src/pages/reference/sdk/_meta.tsx";
import reference_sequencer_meta from "../../../src/pages/reference/sequencer/_meta.tsx";
import reference_stack_meta from "../../../src/pages/reference/stack/_meta.tsx";
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
      name: "overview",
      route: "/docs/architecture/overview",
      frontMatter: {
        "sidebarTitle": "Overview"
      }
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
    name: "concepts",
    route: "/docs/concepts",
    children: [{
      data: docs_concepts_meta
    }, {
      name: "sparse-trees",
      route: "/docs/concepts/sparse-trees",
      frontMatter: {
        "sidebarTitle": "Sparse Trees"
      }
    }, {
      name: "state",
      route: "/docs/concepts/state",
      frontMatter: {
        "sidebarTitle": "State"
      }
    }]
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
    }, {
      name: "transaction-fees",
      route: "/docs/library/transaction-fees",
      frontMatter: {
        "sidebarTitle": "Transaction Fees"
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
      name: "overview",
      route: "/docs/quickstart/overview",
      frontMatter: {
        "sidebarTitle": "Overview"
      }
    }, {
      name: "starter-kit",
      route: "/docs/quickstart/starter-kit",
      frontMatter: {
        "sidebarTitle": "Starter Kit"
      }
    }, {
      name: "user-interface",
      route: "/docs/quickstart/user-interface",
      frontMatter: {
        "sidebarTitle": "User Interface"
      }
    }]
  }, {
    name: "running",
    route: "/docs/running",
    children: [{
      data: docs_running_meta
    }, {
      name: "caching",
      route: "/docs/running/caching",
      frontMatter: {
        "sidebarTitle": "Caching"
      }
    }, {
      name: "cli",
      route: "/docs/running/cli",
      frontMatter: {
        "sidebarTitle": "CLI"
      }
    }, {
      name: "databases",
      route: "/docs/running/databases",
      frontMatter: {
        "sidebarTitle": "Databases"
      }
    }, {
      name: "explorer",
      route: "/docs/running/explorer",
      frontMatter: {
        "sidebarTitle": "Explorer"
      }
    }, {
      name: "infrastructure",
      route: "/docs/running/infrastructure",
      frontMatter: {
        "sidebarTitle": "Infrastructure"
      }
    }, {
      name: "mempool",
      route: "/docs/running/mempool",
      frontMatter: {
        "sidebarTitle": "Mempool"
      }
    }, {
      name: "monitoring",
      route: "/docs/running/monitoring",
      frontMatter: {
        "sidebarTitle": "Monitoring"
      }
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
      name: "overview",
      route: "/docs/runtime/overview",
      frontMatter: {
        "sidebarTitle": "Overview"
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
    name: "settlement",
    route: "/docs/settlement",
    children: [{
      data: docs_settlement_meta
    }, {
      name: "bridging",
      route: "/docs/settlement/bridging",
      frontMatter: {
        "sidebarTitle": "Bridging"
      }
    }, {
      name: "deposits",
      route: "/docs/settlement/deposits",
      frontMatter: {
        "sidebarTitle": "Deposits"
      }
    }, {
      name: "settlement",
      route: "/docs/settlement/settlement",
      frontMatter: {
        "sidebarTitle": "Settlement"
      }
    }, {
      name: "withdrawals",
      route: "/docs/settlement/withdrawals",
      frontMatter: {
        "sidebarTitle": "Withdrawals"
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
}, {
  name: "reference",
  route: "/reference",
  children: [{
    data: reference_meta
  }, {
    name: "api",
    route: "/reference/api",
    children: [{
      data: reference_api_meta
    }, {
      name: "classes",
      route: "/reference/api/classes",
      children: [{
        name: "AdvancedNodeStatusResolver",
        route: "/reference/api/classes/AdvancedNodeStatusResolver",
        frontMatter: {
          "title": "AdvancedNodeStatusResolver"
        }
      }, {
        name: "BatchModel",
        route: "/reference/api/classes/BatchModel",
        frontMatter: {
          "title": "BatchModel"
        }
      }, {
        name: "BatchStorageResolver",
        route: "/reference/api/classes/BatchStorageResolver",
        frontMatter: {
          "title": "BatchStorageResolver"
        }
      }, {
        name: "BlockModel",
        route: "/reference/api/classes/BlockModel",
        frontMatter: {
          "title": "BlockModel"
        }
      }, {
        name: "BlockResolver",
        route: "/reference/api/classes/BlockResolver",
        frontMatter: {
          "title": "BlockResolver"
        }
      }, {
        name: "GraphqlModule",
        route: "/reference/api/classes/GraphqlModule",
        frontMatter: {
          "title": "GraphqlModule"
        }
      }, {
        name: "GraphqlSequencerModule",
        route: "/reference/api/classes/GraphqlSequencerModule",
        frontMatter: {
          "title": "GraphqlSequencerModule"
        }
      }, {
        name: "GraphqlServer",
        route: "/reference/api/classes/GraphqlServer",
        frontMatter: {
          "title": "GraphqlServer"
        }
      }, {
        name: "LinkedLeafDTO",
        route: "/reference/api/classes/LinkedLeafDTO",
        frontMatter: {
          "title": "LinkedLeafDTO"
        }
      }, {
        name: "LinkedMerkleWitnessDTO",
        route: "/reference/api/classes/LinkedMerkleWitnessDTO",
        frontMatter: {
          "title": "LinkedMerkleWitnessDTO"
        }
      }, {
        name: "LinkedMerkleWitnessResolver",
        route: "/reference/api/classes/LinkedMerkleWitnessResolver",
        frontMatter: {
          "title": "LinkedMerkleWitnessResolver"
        }
      }, {
        name: "LinkedTreeWitnessDTO",
        route: "/reference/api/classes/LinkedTreeWitnessDTO",
        frontMatter: {
          "title": "LinkedTreeWitnessDTO"
        }
      }, {
        name: "MempoolResolver",
        route: "/reference/api/classes/MempoolResolver",
        frontMatter: {
          "title": "MempoolResolver"
        }
      }, {
        name: "MerkleWitnessDTO",
        route: "/reference/api/classes/MerkleWitnessDTO",
        frontMatter: {
          "title": "MerkleWitnessDTO"
        }
      }, {
        name: "MerkleWitnessResolver",
        route: "/reference/api/classes/MerkleWitnessResolver",
        frontMatter: {
          "title": "MerkleWitnessResolver"
        }
      }, {
        name: "ModularizedInstrumentation",
        route: "/reference/api/classes/ModularizedInstrumentation",
        frontMatter: {
          "title": "ModularizedInstrumentation"
        }
      }, {
        name: "NodeInformationObject",
        route: "/reference/api/classes/NodeInformationObject",
        frontMatter: {
          "title": "NodeInformationObject"
        }
      }, {
        name: "NodeStatusObject",
        route: "/reference/api/classes/NodeStatusObject",
        frontMatter: {
          "title": "NodeStatusObject"
        }
      }, {
        name: "NodeStatusResolver",
        route: "/reference/api/classes/NodeStatusResolver",
        frontMatter: {
          "title": "NodeStatusResolver"
        }
      }, {
        name: "NodeStatusService",
        route: "/reference/api/classes/NodeStatusService",
        frontMatter: {
          "title": "NodeStatusService"
        }
      }, {
        name: "OpenTelemetryServer",
        route: "/reference/api/classes/OpenTelemetryServer",
        frontMatter: {
          "title": "OpenTelemetryServer"
        }
      }, {
        name: "OpenTelemetryTracer",
        route: "/reference/api/classes/OpenTelemetryTracer",
        frontMatter: {
          "title": "OpenTelemetryTracer"
        }
      }, {
        name: "ProcessInformationObject",
        route: "/reference/api/classes/ProcessInformationObject",
        frontMatter: {
          "title": "ProcessInformationObject"
        }
      }, {
        name: "QueryGraphqlModule",
        route: "/reference/api/classes/QueryGraphqlModule",
        frontMatter: {
          "title": "QueryGraphqlModule"
        }
      }, {
        name: "ResolverFactoryGraphqlModule",
        route: "/reference/api/classes/ResolverFactoryGraphqlModule",
        frontMatter: {
          "title": "ResolverFactoryGraphqlModule"
        }
      }, {
        name: "SchemaGeneratingGraphqlModule",
        route: "/reference/api/classes/SchemaGeneratingGraphqlModule",
        frontMatter: {
          "title": "SchemaGeneratingGraphqlModule"
        }
      }, {
        name: "Signature",
        route: "/reference/api/classes/Signature",
        frontMatter: {
          "title": "Signature"
        }
      }, {
        name: "TransactionObject",
        route: "/reference/api/classes/TransactionObject",
        frontMatter: {
          "title": "TransactionObject"
        }
      }, {
        name: "VanillaGraphqlModules",
        route: "/reference/api/classes/VanillaGraphqlModules",
        frontMatter: {
          "title": "VanillaGraphqlModules"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/api/functions",
      children: [{
        name: "graphqlModule",
        route: "/reference/api/functions/graphqlModule",
        frontMatter: {
          "title": "graphqlModule"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/api/globals",
      frontMatter: {
        "title": "@proto-kit/api"
      }
    }, {
      name: "interfaces",
      route: "/reference/api/interfaces",
      children: [{
        name: "GraphqlServerOptions",
        route: "/reference/api/interfaces/GraphqlServerOptions",
        frontMatter: {
          "title": "GraphqlServerOptions"
        }
      }, {
        name: "NodeInformation",
        route: "/reference/api/interfaces/NodeInformation",
        frontMatter: {
          "title": "NodeInformation"
        }
      }, {
        name: "ProcessInformation",
        route: "/reference/api/interfaces/ProcessInformation",
        frontMatter: {
          "title": "ProcessInformation"
        }
      }]
    }, {
      name: "README",
      route: "/reference/api/README",
      frontMatter: {
        "title": "@proto-kit/api"
      }
    }, {
      name: "type-aliases",
      route: "/reference/api/type-aliases",
      children: [{
        name: "GraphqlModulesRecord",
        route: "/reference/api/type-aliases/GraphqlModulesRecord",
        frontMatter: {
          "title": "GraphqlModulesRecord"
        }
      }, {
        name: "GraphqlSequencerModuleConfig",
        route: "/reference/api/type-aliases/GraphqlSequencerModuleConfig",
        frontMatter: {
          "title": "GraphqlSequencerModuleConfig"
        }
      }, {
        name: "OpenTelemetryServerConfig",
        route: "/reference/api/type-aliases/OpenTelemetryServerConfig",
        frontMatter: {
          "title": "OpenTelemetryServerConfig"
        }
      }, {
        name: "VanillaGraphqlModulesRecord",
        route: "/reference/api/type-aliases/VanillaGraphqlModulesRecord",
        frontMatter: {
          "title": "VanillaGraphqlModulesRecord"
        }
      }]
    }]
  }, {
    name: "cli",
    route: "/reference/cli",
    children: [{
      data: reference_cli_meta
    }, {
      name: "globals",
      route: "/reference/cli/globals",
      frontMatter: {
        "title": "@proto-kit/cli"
      }
    }, {
      name: "README",
      route: "/reference/cli/README",
      frontMatter: {
        "title": "@proto-kit/cli"
      }
    }]
  }, {
    name: "common",
    route: "/reference/common",
    children: [{
      data: reference_common_meta
    }, {
      name: "classes",
      route: "/reference/common/classes",
      children: [{
        name: "AtomicCompileHelper",
        route: "/reference/common/classes/AtomicCompileHelper",
        frontMatter: {
          "title": "AtomicCompileHelper"
        }
      }, {
        name: "CacheManifest",
        route: "/reference/common/classes/CacheManifest",
        frontMatter: {
          "title": "CacheManifest"
        }
      }, {
        name: "ChildVerificationKeyService",
        route: "/reference/common/classes/ChildVerificationKeyService",
        frontMatter: {
          "title": "ChildVerificationKeyService"
        }
      }, {
        name: "CompileRegistry",
        route: "/reference/common/classes/CompileRegistry",
        frontMatter: {
          "title": "CompileRegistry"
        }
      }, {
        name: "ConfigurableModule",
        route: "/reference/common/classes/ConfigurableModule",
        frontMatter: {
          "title": "ConfigurableModule"
        }
      }, {
        name: "EventEmitter",
        route: "/reference/common/classes/EventEmitter",
        frontMatter: {
          "title": "EventEmitter"
        }
      }, {
        name: "EventEmitterProxy",
        route: "/reference/common/classes/EventEmitterProxy",
        frontMatter: {
          "title": "EventEmitterProxy"
        }
      }, {
        name: "InMemoryLinkedLeafStore",
        route: "/reference/common/classes/InMemoryLinkedLeafStore",
        frontMatter: {
          "title": "InMemoryLinkedLeafStore"
        }
      }, {
        name: "InMemoryMerkleTreeStorage",
        route: "/reference/common/classes/InMemoryMerkleTreeStorage",
        frontMatter: {
          "title": "InMemoryMerkleTreeStorage"
        }
      }, {
        name: "LinkedLeafStruct",
        route: "/reference/common/classes/LinkedLeafStruct",
        frontMatter: {
          "title": "LinkedLeafStruct"
        }
      }, {
        name: "LinkedMerkleTree",
        route: "/reference/common/classes/LinkedMerkleTree",
        frontMatter: {
          "title": "LinkedMerkleTree"
        }
      }, {
        name: "LinkedMerkleTreeReadWitness",
        route: "/reference/common/classes/LinkedMerkleTreeReadWitness",
        frontMatter: {
          "title": "LinkedMerkleTreeReadWitness"
        }
      }, {
        name: "LinkedMerkleTreeWitness",
        route: "/reference/common/classes/LinkedMerkleTreeWitness",
        frontMatter: {
          "title": "LinkedMerkleTreeWitness"
        }
      }, {
        name: "MockAsyncMerkleTreeStore",
        route: "/reference/common/classes/MockAsyncMerkleTreeStore",
        frontMatter: {
          "title": "MockAsyncMerkleTreeStore"
        }
      }, {
        name: "ModuleContainer",
        route: "/reference/common/classes/ModuleContainer",
        frontMatter: {
          "title": "ModuleContainer"
        }
      }, {
        name: "O1PublicKeyOption",
        route: "/reference/common/classes/O1PublicKeyOption",
        frontMatter: {
          "title": "O1PublicKeyOption"
        }
      }, {
        name: "ProvableMethodExecutionContext",
        route: "/reference/common/classes/ProvableMethodExecutionContext",
        frontMatter: {
          "title": "ProvableMethodExecutionContext"
        }
      }, {
        name: "ProvableMethodExecutionResult",
        route: "/reference/common/classes/ProvableMethodExecutionResult",
        frontMatter: {
          "title": "ProvableMethodExecutionResult"
        }
      }, {
        name: "ProxyCache",
        route: "/reference/common/classes/ProxyCache",
        frontMatter: {
          "title": "ProxyCache"
        }
      }, {
        name: "RemoteCacheCompiler",
        route: "/reference/common/classes/RemoteCacheCompiler",
        frontMatter: {
          "title": "RemoteCacheCompiler"
        }
      }, {
        name: "ReplayingSingleUseEventEmitter",
        route: "/reference/common/classes/ReplayingSingleUseEventEmitter",
        frontMatter: {
          "title": "ReplayingSingleUseEventEmitter"
        }
      }, {
        name: "RollupMerkleTree",
        route: "/reference/common/classes/RollupMerkleTree",
        frontMatter: {
          "title": "RollupMerkleTree"
        }
      }, {
        name: "RollupMerkleTreeWitness",
        route: "/reference/common/classes/RollupMerkleTreeWitness",
        frontMatter: {
          "title": "RollupMerkleTreeWitness"
        }
      }, {
        name: "StructTemplate",
        route: "/reference/common/classes/StructTemplate",
        frontMatter: {
          "title": "StructTemplate"
        }
      }, {
        name: "ZkProgrammable",
        route: "/reference/common/classes/ZkProgrammable",
        frontMatter: {
          "title": "ZkProgrammable"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/common/functions",
      children: [{
        name: "assertDefined",
        route: "/reference/common/functions/assertDefined",
        frontMatter: {
          "title": "assertDefined"
        }
      }, {
        name: "assertSizeOneOrTwo",
        route: "/reference/common/functions/assertSizeOneOrTwo",
        frontMatter: {
          "title": "assertSizeOneOrTwo"
        }
      }, {
        name: "assertValidTextLogLevel",
        route: "/reference/common/functions/assertValidTextLogLevel",
        frontMatter: {
          "title": "assertValidTextLogLevel"
        }
      }, {
        name: "batch",
        route: "/reference/common/functions/batch",
        frontMatter: {
          "title": "batch"
        }
      }, {
        name: "compileToMockable",
        route: "/reference/common/functions/compileToMockable",
        frontMatter: {
          "title": "compileToMockable"
        }
      }, {
        name: "createLinkedMerkleTree",
        route: "/reference/common/functions/createLinkedMerkleTree",
        frontMatter: {
          "title": "createLinkedMerkleTree"
        }
      }, {
        name: "createMerkleTree",
        route: "/reference/common/functions/createMerkleTree",
        frontMatter: {
          "title": "createMerkleTree"
        }
      }, {
        name: "createReference",
        route: "/reference/common/functions/createReference",
        frontMatter: {
          "title": "createReference"
        }
      }, {
        name: "dependencyFactory",
        route: "/reference/common/functions/dependencyFactory",
        frontMatter: {
          "title": "dependencyFactory"
        }
      }, {
        name: "dummyValue",
        route: "/reference/common/functions/dummyValue",
        frontMatter: {
          "title": "dummyValue"
        }
      }, {
        name: "expectDefined",
        route: "/reference/common/functions/expectDefined",
        frontMatter: {
          "title": "expectDefined"
        }
      }, {
        name: "filterNonNull",
        route: "/reference/common/functions/filterNonNull",
        frontMatter: {
          "title": "filterNonNull"
        }
      }, {
        name: "filterNonUndefined",
        route: "/reference/common/functions/filterNonUndefined",
        frontMatter: {
          "title": "filterNonUndefined"
        }
      }, {
        name: "getInjectAliases",
        route: "/reference/common/functions/getInjectAliases",
        frontMatter: {
          "title": "getInjectAliases"
        }
      }, {
        name: "hashWithPrefix",
        route: "/reference/common/functions/hashWithPrefix",
        frontMatter: {
          "title": "hashWithPrefix"
        }
      }, {
        name: "implement",
        route: "/reference/common/functions/implement",
        frontMatter: {
          "title": "implement"
        }
      }, {
        name: "injectAlias",
        route: "/reference/common/functions/injectAlias",
        frontMatter: {
          "title": "injectAlias"
        }
      }, {
        name: "isFull",
        route: "/reference/common/functions/isFull",
        frontMatter: {
          "title": "isFull"
        }
      }, {
        name: "isGeneratedProvider",
        route: "/reference/common/functions/isGeneratedProvider",
        frontMatter: {
          "title": "isGeneratedProvider"
        }
      }, {
        name: "isSubtypeOfName",
        route: "/reference/common/functions/isSubtypeOfName",
        frontMatter: {
          "title": "isSubtypeOfName"
        }
      }, {
        name: "mapSequential",
        route: "/reference/common/functions/mapSequential",
        frontMatter: {
          "title": "mapSequential"
        }
      }, {
        name: "maybeSwap",
        route: "/reference/common/functions/maybeSwap",
        frontMatter: {
          "title": "maybeSwap"
        }
      }, {
        name: "noop",
        route: "/reference/common/functions/noop",
        frontMatter: {
          "title": "noop"
        }
      }, {
        name: "padArray",
        route: "/reference/common/functions/padArray",
        frontMatter: {
          "title": "padArray"
        }
      }, {
        name: "prefixToField",
        route: "/reference/common/functions/prefixToField",
        frontMatter: {
          "title": "prefixToField"
        }
      }, {
        name: "provableMethod",
        route: "/reference/common/functions/provableMethod",
        frontMatter: {
          "title": "provableMethod"
        }
      }, {
        name: "range",
        route: "/reference/common/functions/range",
        frontMatter: {
          "title": "range"
        }
      }, {
        name: "reduceSequential",
        route: "/reference/common/functions/reduceSequential",
        frontMatter: {
          "title": "reduceSequential"
        }
      }, {
        name: "requireTrue",
        route: "/reference/common/functions/requireTrue",
        frontMatter: {
          "title": "requireTrue"
        }
      }, {
        name: "safeParseJson",
        route: "/reference/common/functions/safeParseJson",
        frontMatter: {
          "title": "safeParseJson"
        }
      }, {
        name: "sleep",
        route: "/reference/common/functions/sleep",
        frontMatter: {
          "title": "sleep"
        }
      }, {
        name: "splitArray",
        route: "/reference/common/functions/splitArray",
        frontMatter: {
          "title": "splitArray"
        }
      }, {
        name: "takeFirst",
        route: "/reference/common/functions/takeFirst",
        frontMatter: {
          "title": "takeFirst"
        }
      }, {
        name: "toProver",
        route: "/reference/common/functions/toProver",
        frontMatter: {
          "title": "toProver"
        }
      }, {
        name: "tryNTimes",
        route: "/reference/common/functions/tryNTimes",
        frontMatter: {
          "title": "tryNTimes"
        }
      }, {
        name: "unzip",
        route: "/reference/common/functions/unzip",
        frontMatter: {
          "title": "unzip"
        }
      }, {
        name: "verifyToMockable",
        route: "/reference/common/functions/verifyToMockable",
        frontMatter: {
          "title": "verifyToMockable"
        }
      }, {
        name: "yieldSequential",
        route: "/reference/common/functions/yieldSequential",
        frontMatter: {
          "title": "yieldSequential"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/common/globals",
      frontMatter: {
        "title": "@proto-kit/common"
      }
    }, {
      name: "interfaces",
      route: "/reference/common/interfaces",
      children: [{
        name: "AbstractLinkedMerkleTree",
        route: "/reference/common/interfaces/AbstractLinkedMerkleTree",
        frontMatter: {
          "title": "AbstractLinkedMerkleTree"
        }
      }, {
        name: "AbstractLinkedMerkleTreeClass",
        route: "/reference/common/interfaces/AbstractLinkedMerkleTreeClass",
        frontMatter: {
          "title": "AbstractLinkedMerkleTreeClass"
        }
      }, {
        name: "AbstractMerkleTree",
        route: "/reference/common/interfaces/AbstractMerkleTree",
        frontMatter: {
          "title": "AbstractMerkleTree"
        }
      }, {
        name: "AbstractMerkleTreeClass",
        route: "/reference/common/interfaces/AbstractMerkleTreeClass",
        frontMatter: {
          "title": "AbstractMerkleTreeClass"
        }
      }, {
        name: "AbstractMerkleWitness",
        route: "/reference/common/interfaces/AbstractMerkleWitness",
        frontMatter: {
          "title": "AbstractMerkleWitness"
        }
      }, {
        name: "AreProofsEnabled",
        route: "/reference/common/interfaces/AreProofsEnabled",
        frontMatter: {
          "title": "AreProofsEnabled"
        }
      }, {
        name: "BaseModuleInstanceType",
        route: "/reference/common/interfaces/BaseModuleInstanceType",
        frontMatter: {
          "title": "BaseModuleInstanceType"
        }
      }, {
        name: "ChildContainerCreatable",
        route: "/reference/common/interfaces/ChildContainerCreatable",
        frontMatter: {
          "title": "ChildContainerCreatable"
        }
      }, {
        name: "ChildContainerProvider",
        route: "/reference/common/interfaces/ChildContainerProvider",
        frontMatter: {
          "title": "ChildContainerProvider"
        }
      }, {
        name: "CompilableModule",
        route: "/reference/common/interfaces/CompilableModule",
        frontMatter: {
          "title": "CompilableModule"
        }
      }, {
        name: "Compile",
        route: "/reference/common/interfaces/Compile",
        frontMatter: {
          "title": "Compile"
        }
      }, {
        name: "CompileArtifact",
        route: "/reference/common/interfaces/CompileArtifact",
        frontMatter: {
          "title": "CompileArtifact"
        }
      }, {
        name: "Configurable",
        route: "/reference/common/interfaces/Configurable",
        frontMatter: {
          "title": "Configurable"
        }
      }, {
        name: "DependencyFactory",
        route: "/reference/common/interfaces/DependencyFactory",
        frontMatter: {
          "title": "DependencyFactory"
        }
      }, {
        name: "EventEmittingComponent",
        route: "/reference/common/interfaces/EventEmittingComponent",
        frontMatter: {
          "title": "EventEmittingComponent"
        }
      }, {
        name: "EventEmittingContainer",
        route: "/reference/common/interfaces/EventEmittingContainer",
        frontMatter: {
          "title": "EventEmittingContainer"
        }
      }, {
        name: "LinkedLeafStore",
        route: "/reference/common/interfaces/LinkedLeafStore",
        frontMatter: {
          "title": "LinkedLeafStore"
        }
      }, {
        name: "MerkleTreeStore",
        route: "/reference/common/interfaces/MerkleTreeStore",
        frontMatter: {
          "title": "MerkleTreeStore"
        }
      }, {
        name: "ModuleContainerLike",
        route: "/reference/common/interfaces/ModuleContainerLike",
        frontMatter: {
          "title": "ModuleContainerLike"
        }
      }, {
        name: "ModulesRecord",
        route: "/reference/common/interfaces/ModulesRecord",
        frontMatter: {
          "title": "ModulesRecord"
        }
      }, {
        name: "PlainZkProgram",
        route: "/reference/common/interfaces/PlainZkProgram",
        frontMatter: {
          "title": "PlainZkProgram"
        }
      }, {
        name: "RemoteCache",
        route: "/reference/common/interfaces/RemoteCache",
        frontMatter: {
          "title": "RemoteCache"
        }
      }, {
        name: "Startable",
        route: "/reference/common/interfaces/Startable",
        frontMatter: {
          "title": "Startable"
        }
      }, {
        name: "StaticConfigurableModule",
        route: "/reference/common/interfaces/StaticConfigurableModule",
        frontMatter: {
          "title": "StaticConfigurableModule"
        }
      }, {
        name: "ToFieldable",
        route: "/reference/common/interfaces/ToFieldable",
        frontMatter: {
          "title": "ToFieldable"
        }
      }, {
        name: "ToFieldableStatic",
        route: "/reference/common/interfaces/ToFieldableStatic",
        frontMatter: {
          "title": "ToFieldableStatic"
        }
      }, {
        name: "ToJSONableStatic",
        route: "/reference/common/interfaces/ToJSONableStatic",
        frontMatter: {
          "title": "ToJSONableStatic"
        }
      }, {
        name: "Verify",
        route: "/reference/common/interfaces/Verify",
        frontMatter: {
          "title": "Verify"
        }
      }, {
        name: "WithZkProgrammable",
        route: "/reference/common/interfaces/WithZkProgrammable",
        frontMatter: {
          "title": "WithZkProgrammable"
        }
      }]
    }, {
      name: "namespaces",
      route: "/reference/common/namespaces",
      children: [{
        name: "BigIntMath",
        route: "/reference/common/namespaces/BigIntMath",
        children: [{
          name: "functions",
          route: "/reference/common/namespaces/BigIntMath/functions",
          children: [{
            name: "max",
            route: "/reference/common/namespaces/BigIntMath/functions/max",
            frontMatter: {
              "title": "max"
            }
          }]
        }, {
          name: "README",
          route: "/reference/common/namespaces/BigIntMath/README",
          frontMatter: {
            "title": "BigIntMath"
          }
        }]
      }, {
        name: "LinkedMerkleTreeCircuitOps",
        route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps",
        children: [{
          name: "classes",
          route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps/classes",
          children: [{
            name: "ComputeRootInstruction",
            route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps/classes/ComputeRootInstruction",
            frontMatter: {
              "title": "ComputeRootInstruction"
            }
          }]
        }, {
          name: "functions",
          route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps/functions",
          children: [{
            name: "applyTreeWrite",
            route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps/functions/applyTreeWrite",
            frontMatter: {
              "title": "applyTreeWrite"
            }
          }]
        }, {
          name: "README",
          route: "/reference/common/namespaces/LinkedMerkleTreeCircuitOps/README",
          frontMatter: {
            "title": "LinkedMerkleTreeCircuitOps"
          }
        }]
      }]
    }, {
      name: "README",
      route: "/reference/common/README",
      frontMatter: {
        "title": "@proto-kit/common"
      }
    }, {
      name: "type-aliases",
      route: "/reference/common/type-aliases",
      children: [{
        name: "ArgumentTypes",
        route: "/reference/common/type-aliases/ArgumentTypes",
        frontMatter: {
          "title": "ArgumentTypes"
        }
      }, {
        name: "ArrayElement",
        route: "/reference/common/type-aliases/ArrayElement",
        frontMatter: {
          "title": "ArrayElement"
        }
      }, {
        name: "ArtifactRecord",
        route: "/reference/common/type-aliases/ArtifactRecord",
        frontMatter: {
          "title": "ArtifactRecord"
        }
      }, {
        name: "BaseModuleType",
        route: "/reference/common/type-aliases/BaseModuleType",
        frontMatter: {
          "title": "BaseModuleType"
        }
      }, {
        name: "CapitalizeAny",
        route: "/reference/common/type-aliases/CapitalizeAny",
        frontMatter: {
          "title": "CapitalizeAny"
        }
      }, {
        name: "CastToEventsRecord",
        route: "/reference/common/type-aliases/CastToEventsRecord",
        frontMatter: {
          "title": "CastToEventsRecord"
        }
      }, {
        name: "CombinedModuleContainerConfig",
        route: "/reference/common/type-aliases/CombinedModuleContainerConfig",
        frontMatter: {
          "title": "CombinedModuleContainerConfig"
        }
      }, {
        name: "CompileTarget",
        route: "/reference/common/type-aliases/CompileTarget",
        frontMatter: {
          "title": "CompileTarget"
        }
      }, {
        name: "ContainerEvents",
        route: "/reference/common/type-aliases/ContainerEvents",
        frontMatter: {
          "title": "ContainerEvents"
        }
      }, {
        name: "DecoratedMethod",
        route: "/reference/common/type-aliases/DecoratedMethod",
        frontMatter: {
          "title": "DecoratedMethod"
        }
      }, {
        name: "DependenciesFromModules",
        route: "/reference/common/type-aliases/DependenciesFromModules",
        frontMatter: {
          "title": "DependenciesFromModules"
        }
      }, {
        name: "DependencyDeclaration",
        route: "/reference/common/type-aliases/DependencyDeclaration",
        frontMatter: {
          "title": "DependencyDeclaration"
        }
      }, {
        name: "DependencyRecord",
        route: "/reference/common/type-aliases/DependencyRecord",
        frontMatter: {
          "title": "DependencyRecord"
        }
      }, {
        name: "EventListenable",
        route: "/reference/common/type-aliases/EventListenable",
        frontMatter: {
          "title": "EventListenable"
        }
      }, {
        name: "EventsRecord",
        route: "/reference/common/type-aliases/EventsRecord",
        frontMatter: {
          "title": "EventsRecord"
        }
      }, {
        name: "FilterNeverValues",
        route: "/reference/common/type-aliases/FilterNeverValues",
        frontMatter: {
          "title": "FilterNeverValues"
        }
      }, {
        name: "FlattenedContainerEvents",
        route: "/reference/common/type-aliases/FlattenedContainerEvents",
        frontMatter: {
          "title": "FlattenedContainerEvents"
        }
      }, {
        name: "FlattenObject",
        route: "/reference/common/type-aliases/FlattenObject",
        frontMatter: {
          "title": "FlattenObject"
        }
      }, {
        name: "GeneratedProvider",
        route: "/reference/common/type-aliases/GeneratedProvider",
        frontMatter: {
          "title": "GeneratedProvider"
        }
      }, {
        name: "InferDependencies",
        route: "/reference/common/type-aliases/InferDependencies",
        frontMatter: {
          "title": "InferDependencies"
        }
      }, {
        name: "InferProofBase",
        route: "/reference/common/type-aliases/InferProofBase",
        frontMatter: {
          "title": "InferProofBase"
        }
      }, {
        name: "LinkedLeaf",
        route: "/reference/common/type-aliases/LinkedLeaf",
        frontMatter: {
          "title": "LinkedLeaf"
        }
      }, {
        name: "MapDependencyRecordToTypes",
        route: "/reference/common/type-aliases/MapDependencyRecordToTypes",
        frontMatter: {
          "title": "MapDependencyRecordToTypes"
        }
      }, {
        name: "MergeObjects",
        route: "/reference/common/type-aliases/MergeObjects",
        frontMatter: {
          "title": "MergeObjects"
        }
      }, {
        name: "ModuleEvents",
        route: "/reference/common/type-aliases/ModuleEvents",
        frontMatter: {
          "title": "ModuleEvents"
        }
      }, {
        name: "ModulesConfig",
        route: "/reference/common/type-aliases/ModulesConfig",
        frontMatter: {
          "title": "ModulesConfig"
        }
      }, {
        name: "NoConfig",
        route: "/reference/common/type-aliases/NoConfig",
        frontMatter: {
          "title": "NoConfig"
        }
      }, {
        name: "NonMethods",
        route: "/reference/common/type-aliases/NonMethods",
        frontMatter: {
          "title": "NonMethods"
        }
      }, {
        name: "Nullable",
        route: "/reference/common/type-aliases/Nullable",
        frontMatter: {
          "title": "Nullable"
        }
      }, {
        name: "O1JSPrimitive",
        route: "/reference/common/type-aliases/O1JSPrimitive",
        frontMatter: {
          "title": "O1JSPrimitive"
        }
      }, {
        name: "OmitKeys",
        route: "/reference/common/type-aliases/OmitKeys",
        frontMatter: {
          "title": "OmitKeys"
        }
      }, {
        name: "OverwriteObjectType",
        route: "/reference/common/type-aliases/OverwriteObjectType",
        frontMatter: {
          "title": "OverwriteObjectType"
        }
      }, {
        name: "Preset",
        route: "/reference/common/type-aliases/Preset",
        frontMatter: {
          "title": "Preset"
        }
      }, {
        name: "Presets",
        route: "/reference/common/type-aliases/Presets",
        frontMatter: {
          "title": "Presets"
        }
      }, {
        name: "ProofTypes",
        route: "/reference/common/type-aliases/ProofTypes",
        frontMatter: {
          "title": "ProofTypes"
        }
      }, {
        name: "RecursivePartial",
        route: "/reference/common/type-aliases/RecursivePartial",
        frontMatter: {
          "title": "RecursivePartial"
        }
      }, {
        name: "Reference",
        route: "/reference/common/type-aliases/Reference",
        frontMatter: {
          "title": "Reference"
        }
      }, {
        name: "ResolvableModules",
        route: "/reference/common/type-aliases/ResolvableModules",
        frontMatter: {
          "title": "ResolvableModules"
        }
      }, {
        name: "StoredLeaf",
        route: "/reference/common/type-aliases/StoredLeaf",
        frontMatter: {
          "title": "StoredLeaf"
        }
      }, {
        name: "StringKeyOf",
        route: "/reference/common/type-aliases/StringKeyOf",
        frontMatter: {
          "title": "StringKeyOf"
        }
      }, {
        name: "TreeWrite",
        route: "/reference/common/type-aliases/TreeWrite",
        frontMatter: {
          "title": "TreeWrite"
        }
      }, {
        name: "TypedClass",
        route: "/reference/common/type-aliases/TypedClass",
        frontMatter: {
          "title": "TypedClass"
        }
      }, {
        name: "TypeFromDependencyDeclaration",
        route: "/reference/common/type-aliases/TypeFromDependencyDeclaration",
        frontMatter: {
          "title": "TypeFromDependencyDeclaration"
        }
      }, {
        name: "UnionToIntersection",
        route: "/reference/common/type-aliases/UnionToIntersection",
        frontMatter: {
          "title": "UnionToIntersection"
        }
      }, {
        name: "UnTypedClass",
        route: "/reference/common/type-aliases/UnTypedClass",
        frontMatter: {
          "title": "UnTypedClass"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/common/variables",
      children: [{
        name: "EMPTY_PUBLICKEY_X",
        route: "/reference/common/variables/EMPTY_PUBLICKEY_X",
        frontMatter: {
          "title": "EMPTY_PUBLICKEY_X"
        }
      }, {
        name: "EMPTY_PUBLICKEY",
        route: "/reference/common/variables/EMPTY_PUBLICKEY",
        frontMatter: {
          "title": "EMPTY_PUBLICKEY"
        }
      }, {
        name: "injectAliasMetadataKey",
        route: "/reference/common/variables/injectAliasMetadataKey",
        frontMatter: {
          "title": "injectAliasMetadataKey"
        }
      }, {
        name: "log",
        route: "/reference/common/variables/log",
        frontMatter: {
          "title": "log"
        }
      }, {
        name: "MAX_FIELD",
        route: "/reference/common/variables/MAX_FIELD",
        frontMatter: {
          "title": "MAX_FIELD"
        }
      }, {
        name: "MOCK_PROOF",
        route: "/reference/common/variables/MOCK_PROOF",
        frontMatter: {
          "title": "MOCK_PROOF"
        }
      }, {
        name: "MOCK_VERIFICATION_KEY",
        route: "/reference/common/variables/MOCK_VERIFICATION_KEY",
        frontMatter: {
          "title": "MOCK_VERIFICATION_KEY"
        }
      }, {
        name: "ModuleContainerErrors",
        route: "/reference/common/variables/ModuleContainerErrors",
        frontMatter: {
          "title": "ModuleContainerErrors"
        }
      }]
    }]
  }, {
    name: "deployment",
    route: "/reference/deployment",
    children: [{
      data: reference_deployment_meta
    }, {
      name: "classes",
      route: "/reference/deployment/classes",
      children: [{
        name: "BullQueue",
        route: "/reference/deployment/classes/BullQueue",
        frontMatter: {
          "title": "BullQueue"
        }
      }, {
        name: "Environment",
        route: "/reference/deployment/classes/Environment",
        frontMatter: {
          "title": "Environment"
        }
      }, {
        name: "S3RemoteCache",
        route: "/reference/deployment/classes/S3RemoteCache",
        frontMatter: {
          "title": "S3RemoteCache"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/deployment/globals",
      frontMatter: {
        "title": "@proto-kit/deployment"
      }
    }, {
      name: "interfaces",
      route: "/reference/deployment/interfaces",
      children: [{
        name: "BullQueueConfig",
        route: "/reference/deployment/interfaces/BullQueueConfig",
        frontMatter: {
          "title": "BullQueueConfig"
        }
      }]
    }, {
      name: "README",
      route: "/reference/deployment/README",
      frontMatter: {
        "title": "@proto-kit/deployment"
      }
    }, {
      name: "type-aliases",
      route: "/reference/deployment/type-aliases",
      children: [{
        name: "S3Config",
        route: "/reference/deployment/type-aliases/S3Config",
        frontMatter: {
          "title": "S3Config"
        }
      }, {
        name: "StartableEnvironment",
        route: "/reference/deployment/type-aliases/StartableEnvironment",
        frontMatter: {
          "title": "StartableEnvironment"
        }
      }]
    }]
  }, {
    name: "indexer",
    route: "/reference/indexer",
    children: [{
      data: reference_indexer_meta
    }, {
      name: "classes",
      route: "/reference/indexer/classes",
      children: [{
        name: "GeneratedResolverFactoryGraphqlModule",
        route: "/reference/indexer/classes/GeneratedResolverFactoryGraphqlModule",
        frontMatter: {
          "title": "GeneratedResolverFactoryGraphqlModule"
        }
      }, {
        name: "IndexBatchTask",
        route: "/reference/indexer/classes/IndexBatchTask",
        frontMatter: {
          "title": "IndexBatchTask"
        }
      }, {
        name: "IndexBlockTask",
        route: "/reference/indexer/classes/IndexBlockTask",
        frontMatter: {
          "title": "IndexBlockTask"
        }
      }, {
        name: "IndexBlockTaskParametersSerializer",
        route: "/reference/indexer/classes/IndexBlockTaskParametersSerializer",
        frontMatter: {
          "title": "IndexBlockTaskParametersSerializer"
        }
      }, {
        name: "Indexer",
        route: "/reference/indexer/classes/Indexer",
        frontMatter: {
          "title": "Indexer"
        }
      }, {
        name: "IndexerHeightInstrumentation",
        route: "/reference/indexer/classes/IndexerHeightInstrumentation",
        frontMatter: {
          "title": "IndexerHeightInstrumentation"
        }
      }, {
        name: "IndexerModule",
        route: "/reference/indexer/classes/IndexerModule",
        frontMatter: {
          "title": "IndexerModule"
        }
      }, {
        name: "IndexerNotifier",
        route: "/reference/indexer/classes/IndexerNotifier",
        frontMatter: {
          "title": "IndexerNotifier"
        }
      }, {
        name: "IndexPendingTxTask",
        route: "/reference/indexer/classes/IndexPendingTxTask",
        frontMatter: {
          "title": "IndexPendingTxTask"
        }
      }, {
        name: "IndexSettlementTask",
        route: "/reference/indexer/classes/IndexSettlementTask",
        frontMatter: {
          "title": "IndexSettlementTask"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/indexer/functions",
      children: [{
        name: "cleanResolvers",
        route: "/reference/indexer/functions/cleanResolvers",
        frontMatter: {
          "title": "cleanResolvers"
        }
      }, {
        name: "ValidateTakeArg",
        route: "/reference/indexer/functions/ValidateTakeArg",
        frontMatter: {
          "title": "ValidateTakeArg"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/indexer/globals",
      frontMatter: {
        "title": "@proto-kit/indexer"
      }
    }, {
      name: "interfaces",
      route: "/reference/indexer/interfaces",
      children: [{
        name: "IndexBlockTaskParameters",
        route: "/reference/indexer/interfaces/IndexBlockTaskParameters",
        frontMatter: {
          "title": "IndexBlockTaskParameters"
        }
      }]
    }, {
      name: "README",
      route: "/reference/indexer/README",
      frontMatter: {
        "title": "@proto-kit/indexer"
      }
    }, {
      name: "type-aliases",
      route: "/reference/indexer/type-aliases",
      children: [{
        name: "IndexBlockResult",
        route: "/reference/indexer/type-aliases/IndexBlockResult",
        frontMatter: {
          "title": "IndexBlockResult"
        }
      }, {
        name: "IndexerModulesRecord",
        route: "/reference/indexer/type-aliases/IndexerModulesRecord",
        frontMatter: {
          "title": "IndexerModulesRecord"
        }
      }, {
        name: "NotifierMandatorySequencerModules",
        route: "/reference/indexer/type-aliases/NotifierMandatorySequencerModules",
        frontMatter: {
          "title": "NotifierMandatorySequencerModules"
        }
      }]
    }]
  }, {
    name: "library",
    route: "/reference/library",
    children: [{
      data: reference_library_meta
    }, {
      name: "classes",
      route: "/reference/library/classes",
      children: [{
        name: "Balance",
        route: "/reference/library/classes/Balance",
        frontMatter: {
          "title": "Balance"
        }
      }, {
        name: "Balances",
        route: "/reference/library/classes/Balances",
        frontMatter: {
          "title": "Balances"
        }
      }, {
        name: "BalancesKey",
        route: "/reference/library/classes/BalancesKey",
        frontMatter: {
          "title": "BalancesKey"
        }
      }, {
        name: "FeeTree",
        route: "/reference/library/classes/FeeTree",
        frontMatter: {
          "title": "FeeTree"
        }
      }, {
        name: "InMemorySequencerModules",
        route: "/reference/library/classes/InMemorySequencerModules",
        frontMatter: {
          "title": "InMemorySequencerModules"
        }
      }, {
        name: "MethodFeeConfigData",
        route: "/reference/library/classes/MethodFeeConfigData",
        frontMatter: {
          "title": "MethodFeeConfigData"
        }
      }, {
        name: "RuntimeFeeAnalyzerService",
        route: "/reference/library/classes/RuntimeFeeAnalyzerService",
        frontMatter: {
          "title": "RuntimeFeeAnalyzerService"
        }
      }, {
        name: "SimpleSequencerModules",
        route: "/reference/library/classes/SimpleSequencerModules",
        frontMatter: {
          "title": "SimpleSequencerModules"
        }
      }, {
        name: "TokenId",
        route: "/reference/library/classes/TokenId",
        frontMatter: {
          "title": "TokenId"
        }
      }, {
        name: "TransactionFeeHook",
        route: "/reference/library/classes/TransactionFeeHook",
        frontMatter: {
          "title": "TransactionFeeHook"
        }
      }, {
        name: "UInt",
        route: "/reference/library/classes/UInt",
        frontMatter: {
          "title": "UInt"
        }
      }, {
        name: "UInt112",
        route: "/reference/library/classes/UInt112",
        frontMatter: {
          "title": "UInt112"
        }
      }, {
        name: "UInt224",
        route: "/reference/library/classes/UInt224",
        frontMatter: {
          "title": "UInt224"
        }
      }, {
        name: "UInt32",
        route: "/reference/library/classes/UInt32",
        frontMatter: {
          "title": "UInt32"
        }
      }, {
        name: "UInt64",
        route: "/reference/library/classes/UInt64",
        frontMatter: {
          "title": "UInt64"
        }
      }, {
        name: "VanillaProtocolModules",
        route: "/reference/library/classes/VanillaProtocolModules",
        frontMatter: {
          "title": "VanillaProtocolModules"
        }
      }, {
        name: "VanillaRuntimeModules",
        route: "/reference/library/classes/VanillaRuntimeModules",
        frontMatter: {
          "title": "VanillaRuntimeModules"
        }
      }, {
        name: "Withdrawal",
        route: "/reference/library/classes/Withdrawal",
        frontMatter: {
          "title": "Withdrawal"
        }
      }, {
        name: "WithdrawalMessageProcessor",
        route: "/reference/library/classes/WithdrawalMessageProcessor",
        frontMatter: {
          "title": "WithdrawalMessageProcessor"
        }
      }, {
        name: "Withdrawals",
        route: "/reference/library/classes/Withdrawals",
        frontMatter: {
          "title": "Withdrawals"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/library/globals",
      frontMatter: {
        "title": "@proto-kit/library"
      }
    }, {
      name: "interfaces",
      route: "/reference/library/interfaces",
      children: [{
        name: "BalancesEvents",
        route: "/reference/library/interfaces/BalancesEvents",
        frontMatter: {
          "title": "BalancesEvents"
        }
      }, {
        name: "FeeIndexes",
        route: "/reference/library/interfaces/FeeIndexes",
        frontMatter: {
          "title": "FeeIndexes"
        }
      }, {
        name: "FeeTreeValues",
        route: "/reference/library/interfaces/FeeTreeValues",
        frontMatter: {
          "title": "FeeTreeValues"
        }
      }, {
        name: "MethodFeeConfig",
        route: "/reference/library/interfaces/MethodFeeConfig",
        frontMatter: {
          "title": "MethodFeeConfig"
        }
      }, {
        name: "RuntimeFeeAnalyzerServiceConfig",
        route: "/reference/library/interfaces/RuntimeFeeAnalyzerServiceConfig",
        frontMatter: {
          "title": "RuntimeFeeAnalyzerServiceConfig"
        }
      }, {
        name: "TransactionFeeHookConfig",
        route: "/reference/library/interfaces/TransactionFeeHookConfig",
        frontMatter: {
          "title": "TransactionFeeHookConfig"
        }
      }]
    }, {
      name: "README",
      route: "/reference/library/README",
      frontMatter: {
        "title": "@proto-kit/library"
      }
    }, {
      name: "type-aliases",
      route: "/reference/library/type-aliases",
      children: [{
        name: "AdditionalSequencerModules",
        route: "/reference/library/type-aliases/AdditionalSequencerModules",
        frontMatter: {
          "title": "AdditionalSequencerModules"
        }
      }, {
        name: "InMemorySequencerModulesRecord",
        route: "/reference/library/type-aliases/InMemorySequencerModulesRecord",
        frontMatter: {
          "title": "InMemorySequencerModulesRecord"
        }
      }, {
        name: "MinimalBalances",
        route: "/reference/library/type-aliases/MinimalBalances",
        frontMatter: {
          "title": "MinimalBalances"
        }
      }, {
        name: "MinimumAdditionalSequencerModules",
        route: "/reference/library/type-aliases/MinimumAdditionalSequencerModules",
        frontMatter: {
          "title": "MinimumAdditionalSequencerModules"
        }
      }, {
        name: "SimpleSequencerModulesRecord",
        route: "/reference/library/type-aliases/SimpleSequencerModulesRecord",
        frontMatter: {
          "title": "SimpleSequencerModulesRecord"
        }
      }, {
        name: "SimpleSequencerWorkerModulesRecord",
        route: "/reference/library/type-aliases/SimpleSequencerWorkerModulesRecord",
        frontMatter: {
          "title": "SimpleSequencerWorkerModulesRecord"
        }
      }, {
        name: "UIntConstructor",
        route: "/reference/library/type-aliases/UIntConstructor",
        frontMatter: {
          "title": "UIntConstructor"
        }
      }, {
        name: "VanillaProtocolModulesRecord",
        route: "/reference/library/type-aliases/VanillaProtocolModulesRecord",
        frontMatter: {
          "title": "VanillaProtocolModulesRecord"
        }
      }, {
        name: "VanillaRuntimeModulesRecord",
        route: "/reference/library/type-aliases/VanillaRuntimeModulesRecord",
        frontMatter: {
          "title": "VanillaRuntimeModulesRecord"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/library/variables",
      children: [{
        name: "errors",
        route: "/reference/library/variables/errors",
        frontMatter: {
          "title": "errors"
        }
      }, {
        name: "treeFeeHeight",
        route: "/reference/library/variables/treeFeeHeight",
        frontMatter: {
          "title": "treeFeeHeight"
        }
      }]
    }]
  }, {
    name: "module",
    route: "/reference/module",
    children: [{
      data: reference_module_meta
    }, {
      name: "classes",
      route: "/reference/module/classes",
      children: [{
        name: "InMemoryStateService",
        route: "/reference/module/classes/InMemoryStateService",
        frontMatter: {
          "title": "InMemoryStateService"
        }
      }, {
        name: "MethodIdFactory",
        route: "/reference/module/classes/MethodIdFactory",
        frontMatter: {
          "title": "MethodIdFactory"
        }
      }, {
        name: "MethodIdResolver",
        route: "/reference/module/classes/MethodIdResolver",
        frontMatter: {
          "title": "MethodIdResolver"
        }
      }, {
        name: "MethodParameterEncoder",
        route: "/reference/module/classes/MethodParameterEncoder",
        frontMatter: {
          "title": "MethodParameterEncoder"
        }
      }, {
        name: "OutgoingMessages",
        route: "/reference/module/classes/OutgoingMessages",
        frontMatter: {
          "title": "OutgoingMessages"
        }
      }, {
        name: "Runtime",
        route: "/reference/module/classes/Runtime",
        frontMatter: {
          "title": "Runtime"
        }
      }, {
        name: "RuntimeEvents",
        route: "/reference/module/classes/RuntimeEvents",
        frontMatter: {
          "title": "RuntimeEvents"
        }
      }, {
        name: "RuntimeModule",
        route: "/reference/module/classes/RuntimeModule",
        frontMatter: {
          "title": "RuntimeModule"
        }
      }, {
        name: "RuntimeZkProgrammable",
        route: "/reference/module/classes/RuntimeZkProgrammable",
        frontMatter: {
          "title": "RuntimeZkProgrammable"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/module/functions",
      children: [{
        name: "checkArgsProvable",
        route: "/reference/module/functions/checkArgsProvable",
        frontMatter: {
          "title": "checkArgsProvable"
        }
      }, {
        name: "combineMethodName",
        route: "/reference/module/functions/combineMethodName",
        frontMatter: {
          "title": "combineMethodName"
        }
      }, {
        name: "getAllPropertyNames",
        route: "/reference/module/functions/getAllPropertyNames",
        frontMatter: {
          "title": "getAllPropertyNames"
        }
      }, {
        name: "isFlexibleProvablePure",
        route: "/reference/module/functions/isFlexibleProvablePure",
        frontMatter: {
          "title": "isFlexibleProvablePure"
        }
      }, {
        name: "isRuntimeMethod",
        route: "/reference/module/functions/isRuntimeMethod",
        frontMatter: {
          "title": "isRuntimeMethod"
        }
      }, {
        name: "outgoingMessage",
        route: "/reference/module/functions/outgoingMessage",
        frontMatter: {
          "title": "outgoingMessage"
        }
      }, {
        name: "runtimeMessage",
        route: "/reference/module/functions/runtimeMessage",
        frontMatter: {
          "title": "runtimeMessage"
        }
      }, {
        name: "runtimeMethod",
        route: "/reference/module/functions/runtimeMethod",
        frontMatter: {
          "title": "runtimeMethod"
        }
      }, {
        name: "runtimeModule",
        route: "/reference/module/functions/runtimeModule",
        frontMatter: {
          "title": "runtimeModule"
        }
      }, {
        name: "toEventsHash",
        route: "/reference/module/functions/toEventsHash",
        frontMatter: {
          "title": "toEventsHash"
        }
      }, {
        name: "toStateTransitionsHash",
        route: "/reference/module/functions/toStateTransitionsHash",
        frontMatter: {
          "title": "toStateTransitionsHash"
        }
      }, {
        name: "toWrappedMethod",
        route: "/reference/module/functions/toWrappedMethod",
        frontMatter: {
          "title": "toWrappedMethod"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/module/globals",
      frontMatter: {
        "title": "@proto-kit/module"
      }
    }, {
      name: "interfaces",
      route: "/reference/module/interfaces",
      children: [{
        name: "RuntimeEnvironment",
        route: "/reference/module/interfaces/RuntimeEnvironment",
        frontMatter: {
          "title": "RuntimeEnvironment"
        }
      }]
    }, {
      name: "README",
      route: "/reference/module/README",
      frontMatter: {
        "title": "@proto-kit/module"
      }
    }, {
      name: "type-aliases",
      route: "/reference/module/type-aliases",
      children: [{
        name: "AsyncWrappedMethod",
        route: "/reference/module/type-aliases/AsyncWrappedMethod",
        frontMatter: {
          "title": "AsyncWrappedMethod"
        }
      }, {
        name: "OutgoingMessagesRecord",
        route: "/reference/module/type-aliases/OutgoingMessagesRecord",
        frontMatter: {
          "title": "OutgoingMessagesRecord"
        }
      }, {
        name: "RuntimeMethodInvocationType",
        route: "/reference/module/type-aliases/RuntimeMethodInvocationType",
        frontMatter: {
          "title": "RuntimeMethodInvocationType"
        }
      }, {
        name: "RuntimeModulesRecord",
        route: "/reference/module/type-aliases/RuntimeModulesRecord",
        frontMatter: {
          "title": "RuntimeModulesRecord"
        }
      }, {
        name: "WrappedMethod",
        route: "/reference/module/type-aliases/WrappedMethod",
        frontMatter: {
          "title": "WrappedMethod"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/module/variables",
      children: [{
        name: "runtimeMethodMetadataKey",
        route: "/reference/module/variables/runtimeMethodMetadataKey",
        frontMatter: {
          "title": "runtimeMethodMetadataKey"
        }
      }, {
        name: "runtimeMethodNamesMetadataKey",
        route: "/reference/module/variables/runtimeMethodNamesMetadataKey",
        frontMatter: {
          "title": "runtimeMethodNamesMetadataKey"
        }
      }, {
        name: "runtimeMethodTypeMetadataKey",
        route: "/reference/module/variables/runtimeMethodTypeMetadataKey",
        frontMatter: {
          "title": "runtimeMethodTypeMetadataKey"
        }
      }]
    }]
  }, {
    name: "persistance",
    route: "/reference/persistance",
    children: [{
      data: reference_persistance_meta
    }, {
      name: "classes",
      route: "/reference/persistance/classes",
      children: [{
        name: "BatchMapper",
        route: "/reference/persistance/classes/BatchMapper",
        frontMatter: {
          "title": "BatchMapper"
        }
      }, {
        name: "BlockMapper",
        route: "/reference/persistance/classes/BlockMapper",
        frontMatter: {
          "title": "BlockMapper"
        }
      }, {
        name: "BlockResultMapper",
        route: "/reference/persistance/classes/BlockResultMapper",
        frontMatter: {
          "title": "BlockResultMapper"
        }
      }, {
        name: "FieldMapper",
        route: "/reference/persistance/classes/FieldMapper",
        frontMatter: {
          "title": "FieldMapper"
        }
      }, {
        name: "PrismaBatchStore",
        route: "/reference/persistance/classes/PrismaBatchStore",
        frontMatter: {
          "title": "PrismaBatchStore"
        }
      }, {
        name: "PrismaBlockStorage",
        route: "/reference/persistance/classes/PrismaBlockStorage",
        frontMatter: {
          "title": "PrismaBlockStorage"
        }
      }, {
        name: "PrismaDatabaseConnection",
        route: "/reference/persistance/classes/PrismaDatabaseConnection",
        frontMatter: {
          "title": "PrismaDatabaseConnection"
        }
      }, {
        name: "PrismaLinkedLeafStore",
        route: "/reference/persistance/classes/PrismaLinkedLeafStore",
        frontMatter: {
          "title": "PrismaLinkedLeafStore"
        }
      }, {
        name: "PrismaMessageStorage",
        route: "/reference/persistance/classes/PrismaMessageStorage",
        frontMatter: {
          "title": "PrismaMessageStorage"
        }
      }, {
        name: "PrismaRedisDatabase",
        route: "/reference/persistance/classes/PrismaRedisDatabase",
        frontMatter: {
          "title": "PrismaRedisDatabase"
        }
      }, {
        name: "PrismaSettlementStorage",
        route: "/reference/persistance/classes/PrismaSettlementStorage",
        frontMatter: {
          "title": "PrismaSettlementStorage"
        }
      }, {
        name: "PrismaStateService",
        route: "/reference/persistance/classes/PrismaStateService",
        frontMatter: {
          "title": "PrismaStateService"
        }
      }, {
        name: "PrismaTransactionStorage",
        route: "/reference/persistance/classes/PrismaTransactionStorage",
        frontMatter: {
          "title": "PrismaTransactionStorage"
        }
      }, {
        name: "RedisConnectionModule",
        route: "/reference/persistance/classes/RedisConnectionModule",
        frontMatter: {
          "title": "RedisConnectionModule"
        }
      }, {
        name: "RedisMerkleTreeStore",
        route: "/reference/persistance/classes/RedisMerkleTreeStore",
        frontMatter: {
          "title": "RedisMerkleTreeStore"
        }
      }, {
        name: "SettlementMapper",
        route: "/reference/persistance/classes/SettlementMapper",
        frontMatter: {
          "title": "SettlementMapper"
        }
      }, {
        name: "StateTransitionArrayMapper",
        route: "/reference/persistance/classes/StateTransitionArrayMapper",
        frontMatter: {
          "title": "StateTransitionArrayMapper"
        }
      }, {
        name: "StateTransitionBatchArrayMapper",
        route: "/reference/persistance/classes/StateTransitionBatchArrayMapper",
        frontMatter: {
          "title": "StateTransitionBatchArrayMapper"
        }
      }, {
        name: "StateTransitionMapper",
        route: "/reference/persistance/classes/StateTransitionMapper",
        frontMatter: {
          "title": "StateTransitionMapper"
        }
      }, {
        name: "TransactionExecutionResultMapper",
        route: "/reference/persistance/classes/TransactionExecutionResultMapper",
        frontMatter: {
          "title": "TransactionExecutionResultMapper"
        }
      }, {
        name: "TransactionMapper",
        route: "/reference/persistance/classes/TransactionMapper",
        frontMatter: {
          "title": "TransactionMapper"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/persistance/globals",
      frontMatter: {
        "title": "@proto-kit/persistance"
      }
    }, {
      name: "interfaces",
      route: "/reference/persistance/interfaces",
      children: [{
        name: "PrismaConnection",
        route: "/reference/persistance/interfaces/PrismaConnection",
        frontMatter: {
          "title": "PrismaConnection"
        }
      }, {
        name: "PrismaDatabaseConfig",
        route: "/reference/persistance/interfaces/PrismaDatabaseConfig",
        frontMatter: {
          "title": "PrismaDatabaseConfig"
        }
      }, {
        name: "PrismaRedisCombinedConfig",
        route: "/reference/persistance/interfaces/PrismaRedisCombinedConfig",
        frontMatter: {
          "title": "PrismaRedisCombinedConfig"
        }
      }, {
        name: "RedisConnection",
        route: "/reference/persistance/interfaces/RedisConnection",
        frontMatter: {
          "title": "RedisConnection"
        }
      }, {
        name: "RedisConnectionConfig",
        route: "/reference/persistance/interfaces/RedisConnectionConfig",
        frontMatter: {
          "title": "RedisConnectionConfig"
        }
      }]
    }, {
      name: "README",
      route: "/reference/persistance/README",
      frontMatter: {
        "title": "@proto-kit/persistance"
      }
    }, {
      name: "type-aliases",
      route: "/reference/persistance/type-aliases",
      children: [{
        name: "RedisTransaction",
        route: "/reference/persistance/type-aliases/RedisTransaction",
        frontMatter: {
          "title": "RedisTransaction"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/persistance/variables",
      children: [{
        name: "Decimal",
        route: "/reference/persistance/variables/Decimal",
        frontMatter: {
          "title": "Decimal"
        }
      }]
    }]
  }, {
    name: "processor",
    route: "/reference/processor",
    children: [{
      data: reference_processor_meta
    }, {
      name: "classes",
      route: "/reference/processor/classes",
      children: [{
        name: "BlockFetching",
        route: "/reference/processor/classes/BlockFetching",
        frontMatter: {
          "title": "BlockFetching"
        }
      }, {
        name: "Database",
        route: "/reference/processor/classes/Database",
        frontMatter: {
          "title": "Database"
        }
      }, {
        name: "DatabasePruneModule",
        route: "/reference/processor/classes/DatabasePruneModule",
        frontMatter: {
          "title": "DatabasePruneModule"
        }
      }, {
        name: "HandlersExecutor",
        route: "/reference/processor/classes/HandlersExecutor",
        frontMatter: {
          "title": "HandlersExecutor"
        }
      }, {
        name: "Processor",
        route: "/reference/processor/classes/Processor",
        frontMatter: {
          "title": "Processor"
        }
      }, {
        name: "ProcessorModule",
        route: "/reference/processor/classes/ProcessorModule",
        frontMatter: {
          "title": "ProcessorModule"
        }
      }, {
        name: "ResolverFactoryGraphqlModule",
        route: "/reference/processor/classes/ResolverFactoryGraphqlModule",
        frontMatter: {
          "title": "ResolverFactoryGraphqlModule"
        }
      }, {
        name: "TimedProcessorTrigger",
        route: "/reference/processor/classes/TimedProcessorTrigger",
        frontMatter: {
          "title": "TimedProcessorTrigger"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/processor/functions",
      children: [{
        name: "cleanResolvers",
        route: "/reference/processor/functions/cleanResolvers",
        frontMatter: {
          "title": "cleanResolvers"
        }
      }, {
        name: "ValidateTakeArg",
        route: "/reference/processor/functions/ValidateTakeArg",
        frontMatter: {
          "title": "ValidateTakeArg"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/processor/globals",
      frontMatter: {
        "title": "@proto-kit/processor"
      }
    }, {
      name: "interfaces",
      route: "/reference/processor/interfaces",
      children: [{
        name: "BlockFetchingConfig",
        route: "/reference/processor/interfaces/BlockFetchingConfig",
        frontMatter: {
          "title": "BlockFetchingConfig"
        }
      }, {
        name: "BlockResponse",
        route: "/reference/processor/interfaces/BlockResponse",
        frontMatter: {
          "title": "BlockResponse"
        }
      }, {
        name: "DatabasePruneModuleConfig",
        route: "/reference/processor/interfaces/DatabasePruneModuleConfig",
        frontMatter: {
          "title": "DatabasePruneModuleConfig"
        }
      }, {
        name: "HandlersExecutorConfig",
        route: "/reference/processor/interfaces/HandlersExecutorConfig",
        frontMatter: {
          "title": "HandlersExecutorConfig"
        }
      }, {
        name: "HandlersRecord",
        route: "/reference/processor/interfaces/HandlersRecord",
        frontMatter: {
          "title": "HandlersRecord"
        }
      }, {
        name: "TimedProcessorTriggerConfig",
        route: "/reference/processor/interfaces/TimedProcessorTriggerConfig",
        frontMatter: {
          "title": "TimedProcessorTriggerConfig"
        }
      }]
    }, {
      name: "README",
      route: "/reference/processor/README",
      frontMatter: {
        "title": "@proto-kit/processor"
      }
    }, {
      name: "type-aliases",
      route: "/reference/processor/type-aliases",
      children: [{
        name: "BasePrismaClient",
        route: "/reference/processor/type-aliases/BasePrismaClient",
        frontMatter: {
          "title": "BasePrismaClient"
        }
      }, {
        name: "BlockHandler",
        route: "/reference/processor/type-aliases/BlockHandler",
        frontMatter: {
          "title": "BlockHandler"
        }
      }, {
        name: "ClientTransaction",
        route: "/reference/processor/type-aliases/ClientTransaction",
        frontMatter: {
          "title": "ClientTransaction"
        }
      }, {
        name: "ProcessorModulesRecord",
        route: "/reference/processor/type-aliases/ProcessorModulesRecord",
        frontMatter: {
          "title": "ProcessorModulesRecord"
        }
      }]
    }]
  }, {
    name: "protocol",
    route: "/reference/protocol",
    children: [{
      data: reference_protocol_meta
    }, {
      name: "classes",
      route: "/reference/protocol/classes",
      children: [{
        name: "AccountState",
        route: "/reference/protocol/classes/AccountState",
        frontMatter: {
          "title": "AccountState"
        }
      }, {
        name: "AccountStateHook",
        route: "/reference/protocol/classes/AccountStateHook",
        frontMatter: {
          "title": "AccountStateHook"
        }
      }, {
        name: "AppliedBatchHashList",
        route: "/reference/protocol/classes/AppliedBatchHashList",
        frontMatter: {
          "title": "AppliedBatchHashList"
        }
      }, {
        name: "AppliedStateTransitionBatch",
        route: "/reference/protocol/classes/AppliedStateTransitionBatch",
        frontMatter: {
          "title": "AppliedStateTransitionBatch"
        }
      }, {
        name: "AppliedStateTransitionBatchState",
        route: "/reference/protocol/classes/AppliedStateTransitionBatchState",
        frontMatter: {
          "title": "AppliedStateTransitionBatchState"
        }
      }, {
        name: "AuthorizedTransaction",
        route: "/reference/protocol/classes/AuthorizedTransaction",
        frontMatter: {
          "title": "AuthorizedTransaction"
        }
      }, {
        name: "BlockArguments",
        route: "/reference/protocol/classes/BlockArguments",
        frontMatter: {
          "title": "BlockArguments"
        }
      }, {
        name: "BlockArgumentsBatch",
        route: "/reference/protocol/classes/BlockArgumentsBatch",
        frontMatter: {
          "title": "BlockArgumentsBatch"
        }
      }, {
        name: "BlockHashMerkleTree",
        route: "/reference/protocol/classes/BlockHashMerkleTree",
        frontMatter: {
          "title": "BlockHashMerkleTree"
        }
      }, {
        name: "BlockHashMerkleTreeWitness",
        route: "/reference/protocol/classes/BlockHashMerkleTreeWitness",
        frontMatter: {
          "title": "BlockHashMerkleTreeWitness"
        }
      }, {
        name: "BlockHashTreeEntry",
        route: "/reference/protocol/classes/BlockHashTreeEntry",
        frontMatter: {
          "title": "BlockHashTreeEntry"
        }
      }, {
        name: "BlockHeightHook",
        route: "/reference/protocol/classes/BlockHeightHook",
        frontMatter: {
          "title": "BlockHeightHook"
        }
      }, {
        name: "BlockProver",
        route: "/reference/protocol/classes/BlockProver",
        frontMatter: {
          "title": "BlockProver"
        }
      }, {
        name: "BlockProverProgrammable",
        route: "/reference/protocol/classes/BlockProverProgrammable",
        frontMatter: {
          "title": "BlockProverProgrammable"
        }
      }, {
        name: "BlockProverPublicInput",
        route: "/reference/protocol/classes/BlockProverPublicInput",
        frontMatter: {
          "title": "BlockProverPublicInput"
        }
      }, {
        name: "BlockProverPublicOutput",
        route: "/reference/protocol/classes/BlockProverPublicOutput",
        frontMatter: {
          "title": "BlockProverPublicOutput"
        }
      }, {
        name: "BlockProverState",
        route: "/reference/protocol/classes/BlockProverState",
        frontMatter: {
          "title": "BlockProverState"
        }
      }, {
        name: "BlockProverStateInput",
        route: "/reference/protocol/classes/BlockProverStateInput",
        frontMatter: {
          "title": "BlockProverStateInput"
        }
      }, {
        name: "BridgeContract",
        route: "/reference/protocol/classes/BridgeContract",
        frontMatter: {
          "title": "BridgeContract"
        }
      }, {
        name: "BridgeContractBase",
        route: "/reference/protocol/classes/BridgeContractBase",
        frontMatter: {
          "title": "BridgeContractBase"
        }
      }, {
        name: "BridgeContractProtocolModule",
        route: "/reference/protocol/classes/BridgeContractProtocolModule",
        frontMatter: {
          "title": "BridgeContractProtocolModule"
        }
      }, {
        name: "BridgingSettlementContract",
        route: "/reference/protocol/classes/BridgingSettlementContract",
        frontMatter: {
          "title": "BridgingSettlementContract"
        }
      }, {
        name: "BridgingSettlementContractBase",
        route: "/reference/protocol/classes/BridgingSettlementContractBase",
        frontMatter: {
          "title": "BridgingSettlementContractBase"
        }
      }, {
        name: "BridgingSettlementContractModule",
        route: "/reference/protocol/classes/BridgingSettlementContractModule",
        frontMatter: {
          "title": "BridgingSettlementContractModule"
        }
      }, {
        name: "Bundle",
        route: "/reference/protocol/classes/Bundle",
        frontMatter: {
          "title": "Bundle"
        }
      }, {
        name: "BundleHashList",
        route: "/reference/protocol/classes/BundleHashList",
        frontMatter: {
          "title": "BundleHashList"
        }
      }, {
        name: "BundlePreimage",
        route: "/reference/protocol/classes/BundlePreimage",
        frontMatter: {
          "title": "BundlePreimage"
        }
      }, {
        name: "ContractArgsRegistry",
        route: "/reference/protocol/classes/ContractArgsRegistry",
        frontMatter: {
          "title": "ContractArgsRegistry"
        }
      }, {
        name: "ContractModule",
        route: "/reference/protocol/classes/ContractModule",
        frontMatter: {
          "title": "ContractModule"
        }
      }, {
        name: "CurrentBlock",
        route: "/reference/protocol/classes/CurrentBlock",
        frontMatter: {
          "title": "CurrentBlock"
        }
      }, {
        name: "DefaultProvableHashList",
        route: "/reference/protocol/classes/DefaultProvableHashList",
        frontMatter: {
          "title": "DefaultProvableHashList"
        }
      }, {
        name: "Deposit",
        route: "/reference/protocol/classes/Deposit",
        frontMatter: {
          "title": "Deposit"
        }
      }, {
        name: "DispatchContractProtocolModule",
        route: "/reference/protocol/classes/DispatchContractProtocolModule",
        frontMatter: {
          "title": "DispatchContractProtocolModule"
        }
      }, {
        name: "DispatchSmartContract",
        route: "/reference/protocol/classes/DispatchSmartContract",
        frontMatter: {
          "title": "DispatchSmartContract"
        }
      }, {
        name: "DispatchSmartContractBase",
        route: "/reference/protocol/classes/DispatchSmartContractBase",
        frontMatter: {
          "title": "DispatchSmartContractBase"
        }
      }, {
        name: "DynamicBlockProof",
        route: "/reference/protocol/classes/DynamicBlockProof",
        frontMatter: {
          "title": "DynamicBlockProof"
        }
      }, {
        name: "FieldOption",
        route: "/reference/protocol/classes/FieldOption",
        frontMatter: {
          "title": "FieldOption"
        }
      }, {
        name: "FieldTransition",
        route: "/reference/protocol/classes/FieldTransition",
        frontMatter: {
          "title": "FieldTransition"
        }
      }, {
        name: "LastStateRootBlockHook",
        route: "/reference/protocol/classes/LastStateRootBlockHook",
        frontMatter: {
          "title": "LastStateRootBlockHook"
        }
      }, {
        name: "MerkleWitnessBatch",
        route: "/reference/protocol/classes/MerkleWitnessBatch",
        frontMatter: {
          "title": "MerkleWitnessBatch"
        }
      }, {
        name: "MethodPublicOutput",
        route: "/reference/protocol/classes/MethodPublicOutput",
        frontMatter: {
          "title": "MethodPublicOutput"
        }
      }, {
        name: "MethodVKConfigData",
        route: "/reference/protocol/classes/MethodVKConfigData",
        frontMatter: {
          "title": "MethodVKConfigData"
        }
      }, {
        name: "MinaActions",
        route: "/reference/protocol/classes/MinaActions",
        frontMatter: {
          "title": "MinaActions"
        }
      }, {
        name: "MinaActionsHashList",
        route: "/reference/protocol/classes/MinaActionsHashList",
        frontMatter: {
          "title": "MinaActionsHashList"
        }
      }, {
        name: "MinaEvents",
        route: "/reference/protocol/classes/MinaEvents",
        frontMatter: {
          "title": "MinaEvents"
        }
      }, {
        name: "MinaPrefixedProvableHashList",
        route: "/reference/protocol/classes/MinaPrefixedProvableHashList",
        frontMatter: {
          "title": "MinaPrefixedProvableHashList"
        }
      }, {
        name: "NetworkState",
        route: "/reference/protocol/classes/NetworkState",
        frontMatter: {
          "title": "NetworkState"
        }
      }, {
        name: "NetworkStateSettlementModule",
        route: "/reference/protocol/classes/NetworkStateSettlementModule",
        frontMatter: {
          "title": "NetworkStateSettlementModule"
        }
      }, {
        name: "Option",
        route: "/reference/protocol/classes/Option",
        frontMatter: {
          "title": "Option"
        }
      }, {
        name: "OptionBase",
        route: "/reference/protocol/classes/OptionBase",
        frontMatter: {
          "title": "OptionBase"
        }
      }, {
        name: "OutgoingMessageArgument",
        route: "/reference/protocol/classes/OutgoingMessageArgument",
        frontMatter: {
          "title": "OutgoingMessageArgument"
        }
      }, {
        name: "OutgoingMessageArgumentBatch",
        route: "/reference/protocol/classes/OutgoingMessageArgumentBatch",
        frontMatter: {
          "title": "OutgoingMessageArgumentBatch"
        }
      }, {
        name: "OutgoingMessageKey",
        route: "/reference/protocol/classes/OutgoingMessageKey",
        frontMatter: {
          "title": "OutgoingMessageKey"
        }
      }, {
        name: "OutgoingMessageKeyStruct",
        route: "/reference/protocol/classes/OutgoingMessageKeyStruct",
        frontMatter: {
          "title": "OutgoingMessageKeyStruct"
        }
      }, {
        name: "OutgoingMessageProcessor",
        route: "/reference/protocol/classes/OutgoingMessageProcessor",
        frontMatter: {
          "title": "OutgoingMessageProcessor"
        }
      }, {
        name: "Path",
        route: "/reference/protocol/classes/Path",
        frontMatter: {
          "title": "Path"
        }
      }, {
        name: "PrefixedProvableHashList",
        route: "/reference/protocol/classes/PrefixedProvableHashList",
        frontMatter: {
          "title": "PrefixedProvableHashList"
        }
      }, {
        name: "PreviousBlock",
        route: "/reference/protocol/classes/PreviousBlock",
        frontMatter: {
          "title": "PreviousBlock"
        }
      }, {
        name: "Protocol",
        route: "/reference/protocol/classes/Protocol",
        frontMatter: {
          "title": "Protocol"
        }
      }, {
        name: "ProtocolModule",
        route: "/reference/protocol/classes/ProtocolModule",
        frontMatter: {
          "title": "ProtocolModule"
        }
      }, {
        name: "ProvableBlockHook",
        route: "/reference/protocol/classes/ProvableBlockHook",
        frontMatter: {
          "title": "ProvableBlockHook"
        }
      }, {
        name: "ProvableHashList",
        route: "/reference/protocol/classes/ProvableHashList",
        frontMatter: {
          "title": "ProvableHashList"
        }
      }, {
        name: "ProvableOption",
        route: "/reference/protocol/classes/ProvableOption",
        frontMatter: {
          "title": "ProvableOption"
        }
      }, {
        name: "ProvableReductionHashList",
        route: "/reference/protocol/classes/ProvableReductionHashList",
        frontMatter: {
          "title": "ProvableReductionHashList"
        }
      }, {
        name: "ProvableSettlementHook",
        route: "/reference/protocol/classes/ProvableSettlementHook",
        frontMatter: {
          "title": "ProvableSettlementHook"
        }
      }, {
        name: "ProvableStateTransition",
        route: "/reference/protocol/classes/ProvableStateTransition",
        frontMatter: {
          "title": "ProvableStateTransition"
        }
      }, {
        name: "ProvableStateTransitionEntry",
        route: "/reference/protocol/classes/ProvableStateTransitionEntry",
        frontMatter: {
          "title": "ProvableStateTransitionEntry"
        }
      }, {
        name: "ProvableStateTransitionType",
        route: "/reference/protocol/classes/ProvableStateTransitionType",
        frontMatter: {
          "title": "ProvableStateTransitionType"
        }
      }, {
        name: "ProvableTransactionHook",
        route: "/reference/protocol/classes/ProvableTransactionHook",
        frontMatter: {
          "title": "ProvableTransactionHook"
        }
      }, {
        name: "PublicKeyOption",
        route: "/reference/protocol/classes/PublicKeyOption",
        frontMatter: {
          "title": "PublicKeyOption"
        }
      }, {
        name: "RuntimeMethodExecutionContext",
        route: "/reference/protocol/classes/RuntimeMethodExecutionContext",
        frontMatter: {
          "title": "RuntimeMethodExecutionContext"
        }
      }, {
        name: "RuntimeMethodExecutionDataStruct",
        route: "/reference/protocol/classes/RuntimeMethodExecutionDataStruct",
        frontMatter: {
          "title": "RuntimeMethodExecutionDataStruct"
        }
      }, {
        name: "RuntimeProvableMethodExecutionResult",
        route: "/reference/protocol/classes/RuntimeProvableMethodExecutionResult",
        frontMatter: {
          "title": "RuntimeProvableMethodExecutionResult"
        }
      }, {
        name: "RuntimeTransaction",
        route: "/reference/protocol/classes/RuntimeTransaction",
        frontMatter: {
          "title": "RuntimeTransaction"
        }
      }, {
        name: "RuntimeVerificationKeyAttestation",
        route: "/reference/protocol/classes/RuntimeVerificationKeyAttestation",
        frontMatter: {
          "title": "RuntimeVerificationKeyAttestation"
        }
      }, {
        name: "RuntimeVerificationKeyRootService",
        route: "/reference/protocol/classes/RuntimeVerificationKeyRootService",
        frontMatter: {
          "title": "RuntimeVerificationKeyRootService"
        }
      }, {
        name: "SettlementBase",
        route: "/reference/protocol/classes/SettlementBase",
        frontMatter: {
          "title": "SettlementBase"
        }
      }, {
        name: "SettlementContract",
        route: "/reference/protocol/classes/SettlementContract",
        frontMatter: {
          "title": "SettlementContract"
        }
      }, {
        name: "SettlementContractModule",
        route: "/reference/protocol/classes/SettlementContractModule",
        frontMatter: {
          "title": "SettlementContractModule"
        }
      }, {
        name: "SettlementSmartContractModule",
        route: "/reference/protocol/classes/SettlementSmartContractModule",
        frontMatter: {
          "title": "SettlementSmartContractModule"
        }
      }, {
        name: "State",
        route: "/reference/protocol/classes/State",
        frontMatter: {
          "title": "State"
        }
      }, {
        name: "StateMap",
        route: "/reference/protocol/classes/StateMap",
        frontMatter: {
          "title": "StateMap"
        }
      }, {
        name: "StateServiceProvider",
        route: "/reference/protocol/classes/StateServiceProvider",
        frontMatter: {
          "title": "StateServiceProvider"
        }
      }, {
        name: "StateTransition",
        route: "/reference/protocol/classes/StateTransition",
        frontMatter: {
          "title": "StateTransition"
        }
      }, {
        name: "StateTransitionProvableBatch",
        route: "/reference/protocol/classes/StateTransitionProvableBatch",
        frontMatter: {
          "title": "StateTransitionProvableBatch"
        }
      }, {
        name: "StateTransitionProver",
        route: "/reference/protocol/classes/StateTransitionProver",
        frontMatter: {
          "title": "StateTransitionProver"
        }
      }, {
        name: "StateTransitionProverProgrammable",
        route: "/reference/protocol/classes/StateTransitionProverProgrammable",
        frontMatter: {
          "title": "StateTransitionProverProgrammable"
        }
      }, {
        name: "StateTransitionProverPublicInput",
        route: "/reference/protocol/classes/StateTransitionProverPublicInput",
        frontMatter: {
          "title": "StateTransitionProverPublicInput"
        }
      }, {
        name: "StateTransitionProverPublicOutput",
        route: "/reference/protocol/classes/StateTransitionProverPublicOutput",
        frontMatter: {
          "title": "StateTransitionProverPublicOutput"
        }
      }, {
        name: "StateTransitionReductionList",
        route: "/reference/protocol/classes/StateTransitionReductionList",
        frontMatter: {
          "title": "StateTransitionReductionList"
        }
      }, {
        name: "StateTransitionType",
        route: "/reference/protocol/classes/StateTransitionType",
        frontMatter: {
          "title": "StateTransitionType"
        }
      }, {
        name: "TokenBridgeAttestation",
        route: "/reference/protocol/classes/TokenBridgeAttestation",
        frontMatter: {
          "title": "TokenBridgeAttestation"
        }
      }, {
        name: "TokenBridgeDeploymentAuth",
        route: "/reference/protocol/classes/TokenBridgeDeploymentAuth",
        frontMatter: {
          "title": "TokenBridgeDeploymentAuth"
        }
      }, {
        name: "TokenBridgeEntry",
        route: "/reference/protocol/classes/TokenBridgeEntry",
        frontMatter: {
          "title": "TokenBridgeEntry"
        }
      }, {
        name: "TokenBridgeTree",
        route: "/reference/protocol/classes/TokenBridgeTree",
        frontMatter: {
          "title": "TokenBridgeTree"
        }
      }, {
        name: "TokenBridgeTreeAddition",
        route: "/reference/protocol/classes/TokenBridgeTreeAddition",
        frontMatter: {
          "title": "TokenBridgeTreeAddition"
        }
      }, {
        name: "TokenBridgeTreeWitness",
        route: "/reference/protocol/classes/TokenBridgeTreeWitness",
        frontMatter: {
          "title": "TokenBridgeTreeWitness"
        }
      }, {
        name: "TokenMapping",
        route: "/reference/protocol/classes/TokenMapping",
        frontMatter: {
          "title": "TokenMapping"
        }
      }, {
        name: "TransactionHashList",
        route: "/reference/protocol/classes/TransactionHashList",
        frontMatter: {
          "title": "TransactionHashList"
        }
      }, {
        name: "TransactionProver",
        route: "/reference/protocol/classes/TransactionProver",
        frontMatter: {
          "title": "TransactionProver"
        }
      }, {
        name: "TransactionProverArguments",
        route: "/reference/protocol/classes/TransactionProverArguments",
        frontMatter: {
          "title": "TransactionProverArguments"
        }
      }, {
        name: "TransactionProverExecutionData",
        route: "/reference/protocol/classes/TransactionProverExecutionData",
        frontMatter: {
          "title": "TransactionProverExecutionData"
        }
      }, {
        name: "TransactionProverPublicInput",
        route: "/reference/protocol/classes/TransactionProverPublicInput",
        frontMatter: {
          "title": "TransactionProverPublicInput"
        }
      }, {
        name: "TransactionProverPublicOutput",
        route: "/reference/protocol/classes/TransactionProverPublicOutput",
        frontMatter: {
          "title": "TransactionProverPublicOutput"
        }
      }, {
        name: "TransactionProverState",
        route: "/reference/protocol/classes/TransactionProverState",
        frontMatter: {
          "title": "TransactionProverState"
        }
      }, {
        name: "TransactionProverTransactionArguments",
        route: "/reference/protocol/classes/TransactionProverTransactionArguments",
        frontMatter: {
          "title": "TransactionProverTransactionArguments"
        }
      }, {
        name: "TransactionProverZkProgrammable",
        route: "/reference/protocol/classes/TransactionProverZkProgrammable",
        frontMatter: {
          "title": "TransactionProverZkProgrammable"
        }
      }, {
        name: "TransitionMethodExecutionResult",
        route: "/reference/protocol/classes/TransitionMethodExecutionResult",
        frontMatter: {
          "title": "TransitionMethodExecutionResult"
        }
      }, {
        name: "UInt64Option",
        route: "/reference/protocol/classes/UInt64Option",
        frontMatter: {
          "title": "UInt64Option"
        }
      }, {
        name: "UpdateMessagesHashAuth",
        route: "/reference/protocol/classes/UpdateMessagesHashAuth",
        frontMatter: {
          "title": "UpdateMessagesHashAuth"
        }
      }, {
        name: "VKTree",
        route: "/reference/protocol/classes/VKTree",
        frontMatter: {
          "title": "VKTree"
        }
      }, {
        name: "VKTreeWitness",
        route: "/reference/protocol/classes/VKTreeWitness",
        frontMatter: {
          "title": "VKTreeWitness"
        }
      }, {
        name: "WithPath",
        route: "/reference/protocol/classes/WithPath",
        frontMatter: {
          "title": "WithPath"
        }
      }, {
        name: "WithStateServiceProvider",
        route: "/reference/protocol/classes/WithStateServiceProvider",
        frontMatter: {
          "title": "WithStateServiceProvider"
        }
      }, {
        name: "WitnessedRoot",
        route: "/reference/protocol/classes/WitnessedRoot",
        frontMatter: {
          "title": "WitnessedRoot"
        }
      }, {
        name: "WitnessedRootHashList",
        route: "/reference/protocol/classes/WitnessedRootHashList",
        frontMatter: {
          "title": "WitnessedRootHashList"
        }
      }, {
        name: "WitnessedRootWitness",
        route: "/reference/protocol/classes/WitnessedRootWitness",
        frontMatter: {
          "title": "WitnessedRootWitness"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/protocol/functions",
      children: [{
        name: "addTransactionToBundle",
        route: "/reference/protocol/functions/addTransactionToBundle",
        frontMatter: {
          "title": "addTransactionToBundle"
        }
      }, {
        name: "assert",
        route: "/reference/protocol/functions/assert",
        frontMatter: {
          "title": "assert"
        }
      }, {
        name: "assertEqualsIf",
        route: "/reference/protocol/functions/assertEqualsIf",
        frontMatter: {
          "title": "assertEqualsIf"
        }
      }, {
        name: "constructBatch",
        route: "/reference/protocol/functions/constructBatch",
        frontMatter: {
          "title": "constructBatch"
        }
      }, {
        name: "createMessageStruct",
        route: "/reference/protocol/functions/createMessageStruct",
        frontMatter: {
          "title": "createMessageStruct"
        }
      }, {
        name: "emptyActions",
        route: "/reference/protocol/functions/emptyActions",
        frontMatter: {
          "title": "emptyActions"
        }
      }, {
        name: "emptyEvents",
        route: "/reference/protocol/functions/emptyEvents",
        frontMatter: {
          "title": "emptyEvents"
        }
      }, {
        name: "executeHooks",
        route: "/reference/protocol/functions/executeHooks",
        frontMatter: {
          "title": "executeHooks"
        }
      }, {
        name: "notInCircuit",
        route: "/reference/protocol/functions/notInCircuit",
        frontMatter: {
          "title": "notInCircuit"
        }
      }, {
        name: "outgoingMessageProcessor",
        route: "/reference/protocol/functions/outgoingMessageProcessor",
        frontMatter: {
          "title": "outgoingMessageProcessor"
        }
      }, {
        name: "reduceStateTransitions",
        route: "/reference/protocol/functions/reduceStateTransitions",
        frontMatter: {
          "title": "reduceStateTransitions"
        }
      }, {
        name: "singleFieldToString",
        route: "/reference/protocol/functions/singleFieldToString",
        frontMatter: {
          "title": "singleFieldToString"
        }
      }, {
        name: "state",
        route: "/reference/protocol/functions/state",
        frontMatter: {
          "title": "state"
        }
      }, {
        name: "stringToField",
        route: "/reference/protocol/functions/stringToField",
        frontMatter: {
          "title": "stringToField"
        }
      }, {
        name: "toAfterBlockHookArgument",
        route: "/reference/protocol/functions/toAfterBlockHookArgument",
        frontMatter: {
          "title": "toAfterBlockHookArgument"
        }
      }, {
        name: "toAfterTransactionHookArgument",
        route: "/reference/protocol/functions/toAfterTransactionHookArgument",
        frontMatter: {
          "title": "toAfterTransactionHookArgument"
        }
      }, {
        name: "toBeforeBlockHookArgument",
        route: "/reference/protocol/functions/toBeforeBlockHookArgument",
        frontMatter: {
          "title": "toBeforeBlockHookArgument"
        }
      }, {
        name: "toBeforeTransactionHookArgument",
        route: "/reference/protocol/functions/toBeforeTransactionHookArgument",
        frontMatter: {
          "title": "toBeforeTransactionHookArgument"
        }
      }, {
        name: "toProvableHookTransactionState",
        route: "/reference/protocol/functions/toProvableHookTransactionState",
        frontMatter: {
          "title": "toProvableHookTransactionState"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/protocol/globals",
      frontMatter: {
        "title": "@proto-kit/protocol"
      }
    }, {
      name: "interfaces",
      route: "/reference/protocol/interfaces",
      children: [{
        name: "AfterBlockHookArguments",
        route: "/reference/protocol/interfaces/AfterBlockHookArguments",
        frontMatter: {
          "title": "AfterBlockHookArguments"
        }
      }, {
        name: "AfterTransactionHookArguments",
        route: "/reference/protocol/interfaces/AfterTransactionHookArguments",
        frontMatter: {
          "title": "AfterTransactionHookArguments"
        }
      }, {
        name: "BeforeBlockHookArguments",
        route: "/reference/protocol/interfaces/BeforeBlockHookArguments",
        frontMatter: {
          "title": "BeforeBlockHookArguments"
        }
      }, {
        name: "BeforeTransactionHookArguments",
        route: "/reference/protocol/interfaces/BeforeTransactionHookArguments",
        frontMatter: {
          "title": "BeforeTransactionHookArguments"
        }
      }, {
        name: "BlockProvable",
        route: "/reference/protocol/interfaces/BlockProvable",
        frontMatter: {
          "title": "BlockProvable"
        }
      }, {
        name: "BlockProverType",
        route: "/reference/protocol/interfaces/BlockProverType",
        frontMatter: {
          "title": "BlockProverType"
        }
      }, {
        name: "BridgeContractArgs",
        route: "/reference/protocol/interfaces/BridgeContractArgs",
        frontMatter: {
          "title": "BridgeContractArgs"
        }
      }, {
        name: "BridgingSettlementContractArgs",
        route: "/reference/protocol/interfaces/BridgingSettlementContractArgs",
        frontMatter: {
          "title": "BridgingSettlementContractArgs"
        }
      }, {
        name: "BridgingSettlementContractType",
        route: "/reference/protocol/interfaces/BridgingSettlementContractType",
        frontMatter: {
          "title": "BridgingSettlementContractType"
        }
      }, {
        name: "ContractAuthorization",
        route: "/reference/protocol/interfaces/ContractAuthorization",
        frontMatter: {
          "title": "ContractAuthorization"
        }
      }, {
        name: "DispatchContractArgs",
        route: "/reference/protocol/interfaces/DispatchContractArgs",
        frontMatter: {
          "title": "DispatchContractArgs"
        }
      }, {
        name: "DispatchContractType",
        route: "/reference/protocol/interfaces/DispatchContractType",
        frontMatter: {
          "title": "DispatchContractType"
        }
      }, {
        name: "MinimalVKTreeService",
        route: "/reference/protocol/interfaces/MinimalVKTreeService",
        frontMatter: {
          "title": "MinimalVKTreeService"
        }
      }, {
        name: "ProtocolEnvironment",
        route: "/reference/protocol/interfaces/ProtocolEnvironment",
        frontMatter: {
          "title": "ProtocolEnvironment"
        }
      }, {
        name: "RuntimeLike",
        route: "/reference/protocol/interfaces/RuntimeLike",
        frontMatter: {
          "title": "RuntimeLike"
        }
      }, {
        name: "RuntimeMethodExecutionData",
        route: "/reference/protocol/interfaces/RuntimeMethodExecutionData",
        frontMatter: {
          "title": "RuntimeMethodExecutionData"
        }
      }, {
        name: "SettlementContractArgs",
        route: "/reference/protocol/interfaces/SettlementContractArgs",
        frontMatter: {
          "title": "SettlementContractArgs"
        }
      }, {
        name: "SettlementContractType",
        route: "/reference/protocol/interfaces/SettlementContractType",
        frontMatter: {
          "title": "SettlementContractType"
        }
      }, {
        name: "SimpleAsyncStateService",
        route: "/reference/protocol/interfaces/SimpleAsyncStateService",
        frontMatter: {
          "title": "SimpleAsyncStateService"
        }
      }, {
        name: "StatefulModule",
        route: "/reference/protocol/interfaces/StatefulModule",
        frontMatter: {
          "title": "StatefulModule"
        }
      }, {
        name: "StateTransitionProvable",
        route: "/reference/protocol/interfaces/StateTransitionProvable",
        frontMatter: {
          "title": "StateTransitionProvable"
        }
      }, {
        name: "StateTransitionProverType",
        route: "/reference/protocol/interfaces/StateTransitionProverType",
        frontMatter: {
          "title": "StateTransitionProverType"
        }
      }, {
        name: "StaticInitializationContract",
        route: "/reference/protocol/interfaces/StaticInitializationContract",
        frontMatter: {
          "title": "StaticInitializationContract"
        }
      }, {
        name: "TransactionProvable",
        route: "/reference/protocol/interfaces/TransactionProvable",
        frontMatter: {
          "title": "TransactionProvable"
        }
      }, {
        name: "TransactionProverType",
        route: "/reference/protocol/interfaces/TransactionProverType",
        frontMatter: {
          "title": "TransactionProverType"
        }
      }, {
        name: "TransitionMethodExecutionContext",
        route: "/reference/protocol/interfaces/TransitionMethodExecutionContext",
        frontMatter: {
          "title": "TransitionMethodExecutionContext"
        }
      }]
    }, {
      name: "README",
      route: "/reference/protocol/README",
      frontMatter: {
        "title": "@proto-kit/protocol"
      }
    }, {
      name: "type-aliases",
      route: "/reference/protocol/type-aliases",
      children: [{
        name: "AccountStateHookConfig",
        route: "/reference/protocol/type-aliases/AccountStateHookConfig",
        frontMatter: {
          "title": "AccountStateHookConfig"
        }
      }, {
        name: "BlockProof",
        route: "/reference/protocol/type-aliases/BlockProof",
        frontMatter: {
          "title": "BlockProof"
        }
      }, {
        name: "BridgeContractConfig",
        route: "/reference/protocol/type-aliases/BridgeContractConfig",
        frontMatter: {
          "title": "BridgeContractConfig"
        }
      }, {
        name: "BridgeContractType",
        route: "/reference/protocol/type-aliases/BridgeContractType",
        frontMatter: {
          "title": "BridgeContractType"
        }
      }, {
        name: "BridgingSettlementModulesRecord",
        route: "/reference/protocol/type-aliases/BridgingSettlementModulesRecord",
        frontMatter: {
          "title": "BridgingSettlementModulesRecord"
        }
      }, {
        name: "DispatchContractConfig",
        route: "/reference/protocol/type-aliases/DispatchContractConfig",
        frontMatter: {
          "title": "DispatchContractConfig"
        }
      }, {
        name: "DynamicRuntimeProof",
        route: "/reference/protocol/type-aliases/DynamicRuntimeProof",
        frontMatter: {
          "title": "DynamicRuntimeProof"
        }
      }, {
        name: "DynamicSTProof",
        route: "/reference/protocol/type-aliases/DynamicSTProof",
        frontMatter: {
          "title": "DynamicSTProof"
        }
      }, {
        name: "DynamicTransactionProof",
        route: "/reference/protocol/type-aliases/DynamicTransactionProof",
        frontMatter: {
          "title": "DynamicTransactionProof"
        }
      }, {
        name: "InputBlockProof",
        route: "/reference/protocol/type-aliases/InputBlockProof",
        frontMatter: {
          "title": "InputBlockProof"
        }
      }, {
        name: "MandatoryProtocolModulesRecord",
        route: "/reference/protocol/type-aliases/MandatoryProtocolModulesRecord",
        frontMatter: {
          "title": "MandatoryProtocolModulesRecord"
        }
      }, {
        name: "MandatorySettlementModulesRecord",
        route: "/reference/protocol/type-aliases/MandatorySettlementModulesRecord",
        frontMatter: {
          "title": "MandatorySettlementModulesRecord"
        }
      }, {
        name: "MessageProcessorArgs",
        route: "/reference/protocol/type-aliases/MessageProcessorArgs",
        frontMatter: {
          "title": "MessageProcessorArgs"
        }
      }, {
        name: "NaiveObjectSchema",
        route: "/reference/protocol/type-aliases/NaiveObjectSchema",
        frontMatter: {
          "title": "NaiveObjectSchema"
        }
      }, {
        name: "NonMethods",
        route: "/reference/protocol/type-aliases/NonMethods",
        frontMatter: {
          "title": "NonMethods"
        }
      }, {
        name: "OutgoingMessage",
        route: "/reference/protocol/type-aliases/OutgoingMessage",
        frontMatter: {
          "title": "OutgoingMessage"
        }
      }, {
        name: "OutgoingMessageEvent",
        route: "/reference/protocol/type-aliases/OutgoingMessageEvent",
        frontMatter: {
          "title": "OutgoingMessageEvent"
        }
      }, {
        name: "ProtocolModulesRecord",
        route: "/reference/protocol/type-aliases/ProtocolModulesRecord",
        frontMatter: {
          "title": "ProtocolModulesRecord"
        }
      }, {
        name: "ProvableHashListData",
        route: "/reference/protocol/type-aliases/ProvableHashListData",
        frontMatter: {
          "title": "ProvableHashListData"
        }
      }, {
        name: "ProvableHookBlockState",
        route: "/reference/protocol/type-aliases/ProvableHookBlockState",
        frontMatter: {
          "title": "ProvableHookBlockState"
        }
      }, {
        name: "ProvableHookTransactionState",
        route: "/reference/protocol/type-aliases/ProvableHookTransactionState",
        frontMatter: {
          "title": "ProvableHookTransactionState"
        }
      }, {
        name: "ReturnType",
        route: "/reference/protocol/type-aliases/ReturnType",
        frontMatter: {
          "title": "ReturnType"
        }
      }, {
        name: "RuntimeMethodIdMapping",
        route: "/reference/protocol/type-aliases/RuntimeMethodIdMapping",
        frontMatter: {
          "title": "RuntimeMethodIdMapping"
        }
      }, {
        name: "RuntimeMethodInvocationType",
        route: "/reference/protocol/type-aliases/RuntimeMethodInvocationType",
        frontMatter: {
          "title": "RuntimeMethodInvocationType"
        }
      }, {
        name: "SettlementContractConfig",
        route: "/reference/protocol/type-aliases/SettlementContractConfig",
        frontMatter: {
          "title": "SettlementContractConfig"
        }
      }, {
        name: "SettlementHookInputs",
        route: "/reference/protocol/type-aliases/SettlementHookInputs",
        frontMatter: {
          "title": "SettlementHookInputs"
        }
      }, {
        name: "SettlementModulesRecord",
        route: "/reference/protocol/type-aliases/SettlementModulesRecord",
        frontMatter: {
          "title": "SettlementModulesRecord"
        }
      }, {
        name: "SettlementStateRecord",
        route: "/reference/protocol/type-aliases/SettlementStateRecord",
        frontMatter: {
          "title": "SettlementStateRecord"
        }
      }, {
        name: "SmartContractClassFromInterface",
        route: "/reference/protocol/type-aliases/SmartContractClassFromInterface",
        frontMatter: {
          "title": "SmartContractClassFromInterface"
        }
      }, {
        name: "StateTransitionProof",
        route: "/reference/protocol/type-aliases/StateTransitionProof",
        frontMatter: {
          "title": "StateTransitionProof"
        }
      }, {
        name: "Subclass",
        route: "/reference/protocol/type-aliases/Subclass",
        frontMatter: {
          "title": "Subclass"
        }
      }, {
        name: "TransactionProof",
        route: "/reference/protocol/type-aliases/TransactionProof",
        frontMatter: {
          "title": "TransactionProof"
        }
      }, {
        name: "TransactionResult",
        route: "/reference/protocol/type-aliases/TransactionResult",
        frontMatter: {
          "title": "TransactionResult"
        }
      }, {
        name: "VerifiedTransition",
        route: "/reference/protocol/type-aliases/VerifiedTransition",
        frontMatter: {
          "title": "VerifiedTransition"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/protocol/variables",
      children: [{
        name: "ACTIONS_EMPTY_HASH",
        route: "/reference/protocol/variables/ACTIONS_EMPTY_HASH",
        frontMatter: {
          "title": "ACTIONS_EMPTY_HASH"
        }
      }, {
        name: "BATCH_SIGNATURE_PREFIX",
        route: "/reference/protocol/variables/BATCH_SIGNATURE_PREFIX",
        frontMatter: {
          "title": "BATCH_SIGNATURE_PREFIX"
        }
      }, {
        name: "BlockProverStateCommitments",
        route: "/reference/protocol/variables/BlockProverStateCommitments",
        frontMatter: {
          "title": "BlockProverStateCommitments"
        }
      }, {
        name: "BridgeContractArgsSchema",
        route: "/reference/protocol/variables/BridgeContractArgsSchema",
        frontMatter: {
          "title": "BridgeContractArgsSchema"
        }
      }, {
        name: "BridgingSettlementContractArgsSchema",
        route: "/reference/protocol/variables/BridgingSettlementContractArgsSchema",
        frontMatter: {
          "title": "BridgingSettlementContractArgsSchema"
        }
      }, {
        name: "DEFAULT_ESCAPE_HATCH",
        route: "/reference/protocol/variables/DEFAULT_ESCAPE_HATCH",
        frontMatter: {
          "title": "DEFAULT_ESCAPE_HATCH"
        }
      }, {
        name: "DispatchContractArgsSchema",
        route: "/reference/protocol/variables/DispatchContractArgsSchema",
        frontMatter: {
          "title": "DispatchContractArgsSchema"
        }
      }, {
        name: "MINA_PREFIXES",
        route: "/reference/protocol/variables/MINA_PREFIXES",
        frontMatter: {
          "title": "MINA_PREFIXES"
        }
      }, {
        name: "MINA_SALTS",
        route: "/reference/protocol/variables/MINA_SALTS",
        frontMatter: {
          "title": "MINA_SALTS"
        }
      }, {
        name: "OUTGOING_MESSAGE_BATCH_SIZE",
        route: "/reference/protocol/variables/OUTGOING_MESSAGE_BATCH_SIZE",
        frontMatter: {
          "title": "OUTGOING_MESSAGE_BATCH_SIZE"
        }
      }, {
        name: "ProtocolConstants",
        route: "/reference/protocol/variables/ProtocolConstants",
        frontMatter: {
          "title": "ProtocolConstants"
        }
      }, {
        name: "PROTOKIT_FIELD_PREFIXES",
        route: "/reference/protocol/variables/PROTOKIT_FIELD_PREFIXES",
        frontMatter: {
          "title": "PROTOKIT_FIELD_PREFIXES"
        }
      }, {
        name: "PROTOKIT_PREFIXES",
        route: "/reference/protocol/variables/PROTOKIT_PREFIXES",
        frontMatter: {
          "title": "PROTOKIT_PREFIXES"
        }
      }, {
        name: "SettlementContractArgsSchema",
        route: "/reference/protocol/variables/SettlementContractArgsSchema",
        frontMatter: {
          "title": "SettlementContractArgsSchema"
        }
      }, {
        name: "TransactionProverStateCommitments",
        route: "/reference/protocol/variables/TransactionProverStateCommitments",
        frontMatter: {
          "title": "TransactionProverStateCommitments"
        }
      }, {
        name: "treeFeeHeight",
        route: "/reference/protocol/variables/treeFeeHeight",
        frontMatter: {
          "title": "treeFeeHeight"
        }
      }]
    }]
  }, {
    name: "sdk",
    route: "/reference/sdk",
    children: [{
      data: reference_sdk_meta
    }, {
      name: "classes",
      route: "/reference/sdk/classes",
      children: [{
        name: "AppChainTransaction",
        route: "/reference/sdk/classes/AppChainTransaction",
        frontMatter: {
          "title": "AppChainTransaction"
        }
      }, {
        name: "AuroSigner",
        route: "/reference/sdk/classes/AuroSigner",
        frontMatter: {
          "title": "AuroSigner"
        }
      }, {
        name: "BlockStorageNetworkStateModule",
        route: "/reference/sdk/classes/BlockStorageNetworkStateModule",
        frontMatter: {
          "title": "BlockStorageNetworkStateModule"
        }
      }, {
        name: "ClientAppChain",
        route: "/reference/sdk/classes/ClientAppChain",
        frontMatter: {
          "title": "ClientAppChain"
        }
      }, {
        name: "GraphqlBlockExplorerTransportModule",
        route: "/reference/sdk/classes/GraphqlBlockExplorerTransportModule",
        frontMatter: {
          "title": "GraphqlBlockExplorerTransportModule"
        }
      }, {
        name: "GraphqlClient",
        route: "/reference/sdk/classes/GraphqlClient",
        frontMatter: {
          "title": "GraphqlClient"
        }
      }, {
        name: "GraphqlNetworkStateTransportModule",
        route: "/reference/sdk/classes/GraphqlNetworkStateTransportModule",
        frontMatter: {
          "title": "GraphqlNetworkStateTransportModule"
        }
      }, {
        name: "GraphqlQueryTransportModule",
        route: "/reference/sdk/classes/GraphqlQueryTransportModule",
        frontMatter: {
          "title": "GraphqlQueryTransportModule"
        }
      }, {
        name: "GraphqlTransactionSender",
        route: "/reference/sdk/classes/GraphqlTransactionSender",
        frontMatter: {
          "title": "GraphqlTransactionSender"
        }
      }, {
        name: "InMemoryBlockExplorer",
        route: "/reference/sdk/classes/InMemoryBlockExplorer",
        frontMatter: {
          "title": "InMemoryBlockExplorer"
        }
      }, {
        name: "InMemorySigner",
        route: "/reference/sdk/classes/InMemorySigner",
        frontMatter: {
          "title": "InMemorySigner"
        }
      }, {
        name: "InMemoryTransactionSender",
        route: "/reference/sdk/classes/InMemoryTransactionSender",
        frontMatter: {
          "title": "InMemoryTransactionSender"
        }
      }, {
        name: "StateServiceQueryModule",
        route: "/reference/sdk/classes/StateServiceQueryModule",
        frontMatter: {
          "title": "StateServiceQueryModule"
        }
      }, {
        name: "TestingAppChain",
        route: "/reference/sdk/classes/TestingAppChain",
        frontMatter: {
          "title": "TestingAppChain"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/sdk/globals",
      frontMatter: {
        "title": "@proto-kit/sdk"
      }
    }, {
      name: "interfaces",
      route: "/reference/sdk/interfaces",
      children: [{
        name: "GraphqlClientConfig",
        route: "/reference/sdk/interfaces/GraphqlClientConfig",
        frontMatter: {
          "title": "GraphqlClientConfig"
        }
      }, {
        name: "InMemorySignerConfig",
        route: "/reference/sdk/interfaces/InMemorySignerConfig",
        frontMatter: {
          "title": "InMemorySignerConfig"
        }
      }, {
        name: "Signer",
        route: "/reference/sdk/interfaces/Signer",
        frontMatter: {
          "title": "Signer"
        }
      }, {
        name: "TransactionSender",
        route: "/reference/sdk/interfaces/TransactionSender",
        frontMatter: {
          "title": "TransactionSender"
        }
      }]
    }, {
      name: "README",
      route: "/reference/sdk/README",
      frontMatter: {
        "title": "@proto-kit/sdk"
      }
    }, {
      name: "type-aliases",
      route: "/reference/sdk/type-aliases",
      children: [{
        name: "InferModules",
        route: "/reference/sdk/type-aliases/InferModules",
        frontMatter: {
          "title": "InferModules"
        }
      }, {
        name: "PartialVanillaRuntimeModulesRecord",
        route: "/reference/sdk/type-aliases/PartialVanillaRuntimeModulesRecord",
        frontMatter: {
          "title": "PartialVanillaRuntimeModulesRecord"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/sdk/variables",
      children: [{
        name: "randomFeeRecipient",
        route: "/reference/sdk/variables/randomFeeRecipient",
        frontMatter: {
          "title": "randomFeeRecipient"
        }
      }]
    }]
  }, {
    name: "sequencer",
    route: "/reference/sequencer",
    children: [{
      data: reference_sequencer_meta
    }, {
      name: "classes",
      route: "/reference/sequencer/classes",
      children: [{
        name: "AbstractTaskQueue",
        route: "/reference/sequencer/classes/AbstractTaskQueue",
        frontMatter: {
          "title": "AbstractTaskQueue"
        }
      }, {
        name: "AppChain",
        route: "/reference/sequencer/classes/AppChain",
        frontMatter: {
          "title": "AppChain"
        }
      }, {
        name: "AppChainModule",
        route: "/reference/sequencer/classes/AppChainModule",
        frontMatter: {
          "title": "AppChainModule"
        }
      }, {
        name: "AreProofsEnabledFactory",
        route: "/reference/sequencer/classes/AreProofsEnabledFactory",
        frontMatter: {
          "title": "AreProofsEnabledFactory"
        }
      }, {
        name: "ArtifactRecordSerializer",
        route: "/reference/sequencer/classes/ArtifactRecordSerializer",
        frontMatter: {
          "title": "ArtifactRecordSerializer"
        }
      }, {
        name: "BatchFlow",
        route: "/reference/sequencer/classes/BatchFlow",
        frontMatter: {
          "title": "BatchFlow"
        }
      }, {
        name: "BatchProducerModule",
        route: "/reference/sequencer/classes/BatchProducerModule",
        frontMatter: {
          "title": "BatchProducerModule"
        }
      }, {
        name: "BatchTracingService",
        route: "/reference/sequencer/classes/BatchTracingService",
        frontMatter: {
          "title": "BatchTracingService"
        }
      }, {
        name: "BlockExplorerQuery",
        route: "/reference/sequencer/classes/BlockExplorerQuery",
        frontMatter: {
          "title": "BlockExplorerQuery"
        }
      }, {
        name: "BlockFlow",
        route: "/reference/sequencer/classes/BlockFlow",
        frontMatter: {
          "title": "BlockFlow"
        }
      }, {
        name: "BlockProducerModule",
        route: "/reference/sequencer/classes/BlockProducerModule",
        frontMatter: {
          "title": "BlockProducerModule"
        }
      }, {
        name: "BlockProductionInstrumentation",
        route: "/reference/sequencer/classes/BlockProductionInstrumentation",
        frontMatter: {
          "title": "BlockProductionInstrumentation"
        }
      }, {
        name: "BlockProductionService",
        route: "/reference/sequencer/classes/BlockProductionService",
        frontMatter: {
          "title": "BlockProductionService"
        }
      }, {
        name: "BlockProofSerializer",
        route: "/reference/sequencer/classes/BlockProofSerializer",
        frontMatter: {
          "title": "BlockProofSerializer"
        }
      }, {
        name: "BlockProverCompileTask",
        route: "/reference/sequencer/classes/BlockProverCompileTask",
        frontMatter: {
          "title": "BlockProverCompileTask"
        }
      }, {
        name: "BlockReductionTask",
        route: "/reference/sequencer/classes/BlockReductionTask",
        frontMatter: {
          "title": "BlockReductionTask"
        }
      }, {
        name: "BlockResultService",
        route: "/reference/sequencer/classes/BlockResultService",
        frontMatter: {
          "title": "BlockResultService"
        }
      }, {
        name: "BlockTracingService",
        route: "/reference/sequencer/classes/BlockTracingService",
        frontMatter: {
          "title": "BlockTracingService"
        }
      }, {
        name: "BlockTriggerBase",
        route: "/reference/sequencer/classes/BlockTriggerBase",
        frontMatter: {
          "title": "BlockTriggerBase"
        }
      }, {
        name: "BridgingModule",
        route: "/reference/sequencer/classes/BridgingModule",
        frontMatter: {
          "title": "BridgingModule"
        }
      }, {
        name: "CachedLinkedLeafStore",
        route: "/reference/sequencer/classes/CachedLinkedLeafStore",
        frontMatter: {
          "title": "CachedLinkedLeafStore"
        }
      }, {
        name: "CachedMerkleTreeStore",
        route: "/reference/sequencer/classes/CachedMerkleTreeStore",
        frontMatter: {
          "title": "CachedMerkleTreeStore"
        }
      }, {
        name: "CachedStateService",
        route: "/reference/sequencer/classes/CachedStateService",
        frontMatter: {
          "title": "CachedStateService"
        }
      }, {
        name: "CircuitAnalysisModule",
        route: "/reference/sequencer/classes/CircuitAnalysisModule",
        frontMatter: {
          "title": "CircuitAnalysisModule"
        }
      }, {
        name: "CircuitCompileTask",
        route: "/reference/sequencer/classes/CircuitCompileTask",
        frontMatter: {
          "title": "CircuitCompileTask"
        }
      }, {
        name: "CloseWorkerError",
        route: "/reference/sequencer/classes/CloseWorkerError",
        frontMatter: {
          "title": "CloseWorkerError"
        }
      }, {
        name: "CompressedSignature",
        route: "/reference/sequencer/classes/CompressedSignature",
        frontMatter: {
          "title": "CompressedSignature"
        }
      }, {
        name: "ConsoleTracer",
        route: "/reference/sequencer/classes/ConsoleTracer",
        frontMatter: {
          "title": "ConsoleTracer"
        }
      }, {
        name: "ConsoleTracingFactory",
        route: "/reference/sequencer/classes/ConsoleTracingFactory",
        frontMatter: {
          "title": "ConsoleTracingFactory"
        }
      }, {
        name: "ConstantFeeStrategy",
        route: "/reference/sequencer/classes/ConstantFeeStrategy",
        frontMatter: {
          "title": "ConstantFeeStrategy"
        }
      }, {
        name: "DecodedStateSerializer",
        route: "/reference/sequencer/classes/DecodedStateSerializer",
        frontMatter: {
          "title": "DecodedStateSerializer"
        }
      }, {
        name: "DefaultMempoolSorting",
        route: "/reference/sequencer/classes/DefaultMempoolSorting",
        frontMatter: {
          "title": "DefaultMempoolSorting"
        }
      }, {
        name: "DefaultOutgoingMessageAdapter",
        route: "/reference/sequencer/classes/DefaultOutgoingMessageAdapter",
        frontMatter: {
          "title": "DefaultOutgoingMessageAdapter"
        }
      }, {
        name: "DummyStateService",
        route: "/reference/sequencer/classes/DummyStateService",
        frontMatter: {
          "title": "DummyStateService"
        }
      }, {
        name: "DynamicProofTaskSerializer",
        route: "/reference/sequencer/classes/DynamicProofTaskSerializer",
        frontMatter: {
          "title": "DynamicProofTaskSerializer"
        }
      }, {
        name: "Flow",
        route: "/reference/sequencer/classes/Flow",
        frontMatter: {
          "title": "Flow"
        }
      }, {
        name: "FlowCreator",
        route: "/reference/sequencer/classes/FlowCreator",
        frontMatter: {
          "title": "FlowCreator"
        }
      }, {
        name: "FlowTaskWorker",
        route: "/reference/sequencer/classes/FlowTaskWorker",
        frontMatter: {
          "title": "FlowTaskWorker"
        }
      }, {
        name: "FungibleTokenAdminContractModule",
        route: "/reference/sequencer/classes/FungibleTokenAdminContractModule",
        frontMatter: {
          "title": "FungibleTokenAdminContractModule"
        }
      }, {
        name: "FungibleTokenContractModule",
        route: "/reference/sequencer/classes/FungibleTokenContractModule",
        frontMatter: {
          "title": "FungibleTokenContractModule"
        }
      }, {
        name: "InMemoryAreProofsEnabled",
        route: "/reference/sequencer/classes/InMemoryAreProofsEnabled",
        frontMatter: {
          "title": "InMemoryAreProofsEnabled"
        }
      }, {
        name: "InMemoryAsyncMerkleTreeStore",
        route: "/reference/sequencer/classes/InMemoryAsyncMerkleTreeStore",
        frontMatter: {
          "title": "InMemoryAsyncMerkleTreeStore"
        }
      }, {
        name: "InMemoryBatchStorage",
        route: "/reference/sequencer/classes/InMemoryBatchStorage",
        frontMatter: {
          "title": "InMemoryBatchStorage"
        }
      }, {
        name: "InMemoryBlockStorage",
        route: "/reference/sequencer/classes/InMemoryBlockStorage",
        frontMatter: {
          "title": "InMemoryBlockStorage"
        }
      }, {
        name: "InMemoryDatabase",
        route: "/reference/sequencer/classes/InMemoryDatabase",
        frontMatter: {
          "title": "InMemoryDatabase"
        }
      }, {
        name: "InMemoryMessageStorage",
        route: "/reference/sequencer/classes/InMemoryMessageStorage",
        frontMatter: {
          "title": "InMemoryMessageStorage"
        }
      }, {
        name: "InMemoryMinaSigner",
        route: "/reference/sequencer/classes/InMemoryMinaSigner",
        frontMatter: {
          "title": "InMemoryMinaSigner"
        }
      }, {
        name: "InMemorySettlementStorage",
        route: "/reference/sequencer/classes/InMemorySettlementStorage",
        frontMatter: {
          "title": "InMemorySettlementStorage"
        }
      }, {
        name: "InMemoryTransactionStorage",
        route: "/reference/sequencer/classes/InMemoryTransactionStorage",
        frontMatter: {
          "title": "InMemoryTransactionStorage"
        }
      }, {
        name: "LightnetUtils",
        route: "/reference/sequencer/classes/LightnetUtils",
        frontMatter: {
          "title": "LightnetUtils"
        }
      }, {
        name: "ListenerList",
        route: "/reference/sequencer/classes/ListenerList",
        frontMatter: {
          "title": "ListenerList"
        }
      }, {
        name: "LocalBlockchainUtils",
        route: "/reference/sequencer/classes/LocalBlockchainUtils",
        frontMatter: {
          "title": "LocalBlockchainUtils"
        }
      }, {
        name: "LocalSequencerCoreModule",
        route: "/reference/sequencer/classes/LocalSequencerCoreModule",
        frontMatter: {
          "title": "LocalSequencerCoreModule"
        }
      }, {
        name: "LocalTaskQueue",
        route: "/reference/sequencer/classes/LocalTaskQueue",
        frontMatter: {
          "title": "LocalTaskQueue"
        }
      }, {
        name: "ManualBlockTrigger",
        route: "/reference/sequencer/classes/ManualBlockTrigger",
        frontMatter: {
          "title": "ManualBlockTrigger"
        }
      }, {
        name: "MempoolInstrumentation",
        route: "/reference/sequencer/classes/MempoolInstrumentation",
        frontMatter: {
          "title": "MempoolInstrumentation"
        }
      }, {
        name: "MinaBaseLayer",
        route: "/reference/sequencer/classes/MinaBaseLayer",
        frontMatter: {
          "title": "MinaBaseLayer"
        }
      }, {
        name: "MinaIncomingMessageAdapter",
        route: "/reference/sequencer/classes/MinaIncomingMessageAdapter",
        frontMatter: {
          "title": "MinaIncomingMessageAdapter"
        }
      }, {
        name: "MinaSimulationService",
        route: "/reference/sequencer/classes/MinaSimulationService",
        frontMatter: {
          "title": "MinaSimulationService"
        }
      }, {
        name: "MinaTransactionSender",
        route: "/reference/sequencer/classes/MinaTransactionSender",
        frontMatter: {
          "title": "MinaTransactionSender"
        }
      }, {
        name: "MinaTransactionSimulator",
        route: "/reference/sequencer/classes/MinaTransactionSimulator",
        frontMatter: {
          "title": "MinaTransactionSimulator"
        }
      }, {
        name: "NetworkStateQuery",
        route: "/reference/sequencer/classes/NetworkStateQuery",
        frontMatter: {
          "title": "NetworkStateQuery"
        }
      }, {
        name: "NewBlockProvingParametersSerializer",
        route: "/reference/sequencer/classes/NewBlockProvingParametersSerializer",
        frontMatter: {
          "title": "NewBlockProvingParametersSerializer"
        }
      }, {
        name: "NewBlockTask",
        route: "/reference/sequencer/classes/NewBlockTask",
        frontMatter: {
          "title": "NewBlockTask"
        }
      }, {
        name: "NoopBaseLayer",
        route: "/reference/sequencer/classes/NoopBaseLayer",
        frontMatter: {
          "title": "NoopBaseLayer"
        }
      }, {
        name: "PairProofTaskSerializer",
        route: "/reference/sequencer/classes/PairProofTaskSerializer",
        frontMatter: {
          "title": "PairProofTaskSerializer"
        }
      }, {
        name: "PendingTransaction",
        route: "/reference/sequencer/classes/PendingTransaction",
        frontMatter: {
          "title": "PendingTransaction"
        }
      }, {
        name: "PreFilledStateService",
        route: "/reference/sequencer/classes/PreFilledStateService",
        frontMatter: {
          "title": "PreFilledStateService"
        }
      }, {
        name: "PrivateMempool",
        route: "/reference/sequencer/classes/PrivateMempool",
        frontMatter: {
          "title": "PrivateMempool"
        }
      }, {
        name: "ProofTaskSerializer",
        route: "/reference/sequencer/classes/ProofTaskSerializer",
        frontMatter: {
          "title": "ProofTaskSerializer"
        }
      }, {
        name: "ProtocolCompileTask",
        route: "/reference/sequencer/classes/ProtocolCompileTask",
        frontMatter: {
          "title": "ProtocolCompileTask"
        }
      }, {
        name: "ProvenSettlementPermissions",
        route: "/reference/sequencer/classes/ProvenSettlementPermissions",
        frontMatter: {
          "title": "ProvenSettlementPermissions"
        }
      }, {
        name: "PushInstrumentation",
        route: "/reference/sequencer/classes/PushInstrumentation",
        frontMatter: {
          "title": "PushInstrumentation"
        }
      }, {
        name: "ReductionTaskFlow",
        route: "/reference/sequencer/classes/ReductionTaskFlow",
        frontMatter: {
          "title": "ReductionTaskFlow"
        }
      }, {
        name: "RemoteNetworkUtils",
        route: "/reference/sequencer/classes/RemoteNetworkUtils",
        frontMatter: {
          "title": "RemoteNetworkUtils"
        }
      }, {
        name: "RuntimeCompileTask",
        route: "/reference/sequencer/classes/RuntimeCompileTask",
        frontMatter: {
          "title": "RuntimeCompileTask"
        }
      }, {
        name: "RuntimeProofParametersSerializer",
        route: "/reference/sequencer/classes/RuntimeProofParametersSerializer",
        frontMatter: {
          "title": "RuntimeProofParametersSerializer"
        }
      }, {
        name: "RuntimeProvingTask",
        route: "/reference/sequencer/classes/RuntimeProvingTask",
        frontMatter: {
          "title": "RuntimeProvingTask"
        }
      }, {
        name: "RuntimeVerificationKeyAttestationSerializer",
        route: "/reference/sequencer/classes/RuntimeVerificationKeyAttestationSerializer",
        frontMatter: {
          "title": "RuntimeVerificationKeyAttestationSerializer"
        }
      }, {
        name: "Sequencer",
        route: "/reference/sequencer/classes/Sequencer",
        frontMatter: {
          "title": "Sequencer"
        }
      }, {
        name: "SequencerCoreModule",
        route: "/reference/sequencer/classes/SequencerCoreModule",
        frontMatter: {
          "title": "SequencerCoreModule"
        }
      }, {
        name: "SequencerIdProvider",
        route: "/reference/sequencer/classes/SequencerIdProvider",
        frontMatter: {
          "title": "SequencerIdProvider"
        }
      }, {
        name: "SequencerModule",
        route: "/reference/sequencer/classes/SequencerModule",
        frontMatter: {
          "title": "SequencerModule"
        }
      }, {
        name: "SequencerStartupModule",
        route: "/reference/sequencer/classes/SequencerStartupModule",
        frontMatter: {
          "title": "SequencerStartupModule"
        }
      }, {
        name: "SettlementCompileTask",
        route: "/reference/sequencer/classes/SettlementCompileTask",
        frontMatter: {
          "title": "SettlementCompileTask"
        }
      }, {
        name: "SettlementModule",
        route: "/reference/sequencer/classes/SettlementModule",
        frontMatter: {
          "title": "SettlementModule"
        }
      }, {
        name: "SettlementProvingTask",
        route: "/reference/sequencer/classes/SettlementProvingTask",
        frontMatter: {
          "title": "SettlementProvingTask"
        }
      }, {
        name: "SettlementStartupModule",
        route: "/reference/sequencer/classes/SettlementStartupModule",
        frontMatter: {
          "title": "SettlementStartupModule"
        }
      }, {
        name: "SettlementUtils",
        route: "/reference/sequencer/classes/SettlementUtils",
        frontMatter: {
          "title": "SettlementUtils"
        }
      }, {
        name: "SharedDependencyFactory",
        route: "/reference/sequencer/classes/SharedDependencyFactory",
        frontMatter: {
          "title": "SharedDependencyFactory"
        }
      }, {
        name: "SignedSettlementPermissions",
        route: "/reference/sequencer/classes/SignedSettlementPermissions",
        frontMatter: {
          "title": "SignedSettlementPermissions"
        }
      }, {
        name: "SomeProofSubclass",
        route: "/reference/sequencer/classes/SomeProofSubclass",
        frontMatter: {
          "title": "SomeProofSubclass"
        }
      }, {
        name: "StateTransitionFlow",
        route: "/reference/sequencer/classes/StateTransitionFlow",
        frontMatter: {
          "title": "StateTransitionFlow"
        }
      }, {
        name: "StateTransitionParametersSerializer",
        route: "/reference/sequencer/classes/StateTransitionParametersSerializer",
        frontMatter: {
          "title": "StateTransitionParametersSerializer"
        }
      }, {
        name: "StateTransitionReductionTask",
        route: "/reference/sequencer/classes/StateTransitionReductionTask",
        frontMatter: {
          "title": "StateTransitionReductionTask"
        }
      }, {
        name: "StateTransitionTask",
        route: "/reference/sequencer/classes/StateTransitionTask",
        frontMatter: {
          "title": "StateTransitionTask"
        }
      }, {
        name: "StateTransitionTracingService",
        route: "/reference/sequencer/classes/StateTransitionTracingService",
        frontMatter: {
          "title": "StateTransitionTracingService"
        }
      }, {
        name: "STProverCompileTask",
        route: "/reference/sequencer/classes/STProverCompileTask",
        frontMatter: {
          "title": "STProverCompileTask"
        }
      }, {
        name: "SyncCachedMerkleTreeStore",
        route: "/reference/sequencer/classes/SyncCachedMerkleTreeStore",
        frontMatter: {
          "title": "SyncCachedMerkleTreeStore"
        }
      }, {
        name: "TaskWorkerModule",
        route: "/reference/sequencer/classes/TaskWorkerModule",
        frontMatter: {
          "title": "TaskWorkerModule"
        }
      }, {
        name: "TimedBlockTrigger",
        route: "/reference/sequencer/classes/TimedBlockTrigger",
        frontMatter: {
          "title": "TimedBlockTrigger"
        }
      }, {
        name: "TransactionExecutionService",
        route: "/reference/sequencer/classes/TransactionExecutionService",
        frontMatter: {
          "title": "TransactionExecutionService"
        }
      }, {
        name: "TransactionFlow",
        route: "/reference/sequencer/classes/TransactionFlow",
        frontMatter: {
          "title": "TransactionFlow"
        }
      }, {
        name: "TransactionProverCompileTask",
        route: "/reference/sequencer/classes/TransactionProverCompileTask",
        frontMatter: {
          "title": "TransactionProverCompileTask"
        }
      }, {
        name: "TransactionProvingTask",
        route: "/reference/sequencer/classes/TransactionProvingTask",
        frontMatter: {
          "title": "TransactionProvingTask"
        }
      }, {
        name: "TransactionProvingTaskParameterSerializer",
        route: "/reference/sequencer/classes/TransactionProvingTaskParameterSerializer",
        frontMatter: {
          "title": "TransactionProvingTaskParameterSerializer"
        }
      }, {
        name: "TransactionReductionTask",
        route: "/reference/sequencer/classes/TransactionReductionTask",
        frontMatter: {
          "title": "TransactionReductionTask"
        }
      }, {
        name: "TransactionTracingService",
        route: "/reference/sequencer/classes/TransactionTracingService",
        frontMatter: {
          "title": "TransactionTracingService"
        }
      }, {
        name: "UnsignedTransaction",
        route: "/reference/sequencer/classes/UnsignedTransaction",
        frontMatter: {
          "title": "UnsignedTransaction"
        }
      }, {
        name: "UntypedOption",
        route: "/reference/sequencer/classes/UntypedOption",
        frontMatter: {
          "title": "UntypedOption"
        }
      }, {
        name: "UntypedStateTransition",
        route: "/reference/sequencer/classes/UntypedStateTransition",
        frontMatter: {
          "title": "UntypedStateTransition"
        }
      }, {
        name: "VanillaTaskWorkerModules",
        route: "/reference/sequencer/classes/VanillaTaskWorkerModules",
        frontMatter: {
          "title": "VanillaTaskWorkerModules"
        }
      }, {
        name: "VerificationKeySerializer",
        route: "/reference/sequencer/classes/VerificationKeySerializer",
        frontMatter: {
          "title": "VerificationKeySerializer"
        }
      }, {
        name: "WorkerModule",
        route: "/reference/sequencer/classes/WorkerModule",
        frontMatter: {
          "title": "WorkerModule"
        }
      }, {
        name: "WorkerReadyModule",
        route: "/reference/sequencer/classes/WorkerReadyModule",
        frontMatter: {
          "title": "WorkerReadyModule"
        }
      }, {
        name: "WorkerRegistrationTask",
        route: "/reference/sequencer/classes/WorkerRegistrationTask",
        frontMatter: {
          "title": "WorkerRegistrationTask"
        }
      }]
    }, {
      name: "enumerations",
      route: "/reference/sequencer/enumerations",
      children: [{
        name: "InclusionStatus",
        route: "/reference/sequencer/enumerations/InclusionStatus",
        frontMatter: {
          "title": "InclusionStatus"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/sequencer/functions",
      children: [{
        name: "closeable",
        route: "/reference/sequencer/functions/closeable",
        frontMatter: {
          "title": "closeable"
        }
      }, {
        name: "collectStartingState",
        route: "/reference/sequencer/functions/collectStartingState",
        frontMatter: {
          "title": "collectStartingState"
        }
      }, {
        name: "distinct",
        route: "/reference/sequencer/functions/distinct",
        frontMatter: {
          "title": "distinct"
        }
      }, {
        name: "distinctByPredicate",
        route: "/reference/sequencer/functions/distinctByPredicate",
        frontMatter: {
          "title": "distinctByPredicate"
        }
      }, {
        name: "distinctByString",
        route: "/reference/sequencer/functions/distinctByString",
        frontMatter: {
          "title": "distinctByString"
        }
      }, {
        name: "ensureNotBusy",
        route: "/reference/sequencer/functions/ensureNotBusy",
        frontMatter: {
          "title": "ensureNotBusy"
        }
      }, {
        name: "executeWithExecutionContext",
        route: "/reference/sequencer/functions/executeWithExecutionContext",
        frontMatter: {
          "title": "executeWithExecutionContext"
        }
      }, {
        name: "executeWithPrefilledStateService",
        route: "/reference/sequencer/functions/executeWithPrefilledStateService",
        frontMatter: {
          "title": "executeWithPrefilledStateService"
        }
      }, {
        name: "instrumentation",
        route: "/reference/sequencer/functions/instrumentation",
        frontMatter: {
          "title": "instrumentation"
        }
      }, {
        name: "sequencerModule",
        route: "/reference/sequencer/functions/sequencerModule",
        frontMatter: {
          "title": "sequencerModule"
        }
      }, {
        name: "startable",
        route: "/reference/sequencer/functions/startable",
        frontMatter: {
          "title": "startable"
        }
      }, {
        name: "task",
        route: "/reference/sequencer/functions/task",
        frontMatter: {
          "title": "task"
        }
      }, {
        name: "toStateTransitionHashNonProvable",
        route: "/reference/sequencer/functions/toStateTransitionHashNonProvable",
        frontMatter: {
          "title": "toStateTransitionHashNonProvable"
        }
      }, {
        name: "trace",
        route: "/reference/sequencer/functions/trace",
        frontMatter: {
          "title": "trace"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/sequencer/globals",
      frontMatter: {
        "title": "@proto-kit/sequencer"
      }
    }, {
      name: "interfaces",
      route: "/reference/sequencer/interfaces",
      children: [{
        name: "AsyncLinkedLeafStore",
        route: "/reference/sequencer/interfaces/AsyncLinkedLeafStore",
        frontMatter: {
          "title": "AsyncLinkedLeafStore"
        }
      }, {
        name: "AsyncLinkedMerkleTreeDatabase",
        route: "/reference/sequencer/interfaces/AsyncLinkedMerkleTreeDatabase",
        frontMatter: {
          "title": "AsyncLinkedMerkleTreeDatabase"
        }
      }, {
        name: "AsyncMerkleTreeStore",
        route: "/reference/sequencer/interfaces/AsyncMerkleTreeStore",
        frontMatter: {
          "title": "AsyncMerkleTreeStore"
        }
      }, {
        name: "AsyncStateService",
        route: "/reference/sequencer/interfaces/AsyncStateService",
        frontMatter: {
          "title": "AsyncStateService"
        }
      }, {
        name: "BaseLayer",
        route: "/reference/sequencer/interfaces/BaseLayer",
        frontMatter: {
          "title": "BaseLayer"
        }
      }, {
        name: "BaseLayerContractPermissions",
        route: "/reference/sequencer/interfaces/BaseLayerContractPermissions",
        frontMatter: {
          "title": "BaseLayerContractPermissions"
        }
      }, {
        name: "BaseLayerDependencyRecord",
        route: "/reference/sequencer/interfaces/BaseLayerDependencyRecord",
        frontMatter: {
          "title": "BaseLayerDependencyRecord"
        }
      }, {
        name: "Batch",
        route: "/reference/sequencer/interfaces/Batch",
        frontMatter: {
          "title": "Batch"
        }
      }, {
        name: "BatchStorage",
        route: "/reference/sequencer/interfaces/BatchStorage",
        frontMatter: {
          "title": "BatchStorage"
        }
      }, {
        name: "Block",
        route: "/reference/sequencer/interfaces/Block",
        frontMatter: {
          "title": "Block"
        }
      }, {
        name: "BlockConfig",
        route: "/reference/sequencer/interfaces/BlockConfig",
        frontMatter: {
          "title": "BlockConfig"
        }
      }, {
        name: "BlockExplorerTransportModule",
        route: "/reference/sequencer/interfaces/BlockExplorerTransportModule",
        frontMatter: {
          "title": "BlockExplorerTransportModule"
        }
      }, {
        name: "BlockQueue",
        route: "/reference/sequencer/interfaces/BlockQueue",
        frontMatter: {
          "title": "BlockQueue"
        }
      }, {
        name: "BlockResult",
        route: "/reference/sequencer/interfaces/BlockResult",
        frontMatter: {
          "title": "BlockResult"
        }
      }, {
        name: "BlockStorage",
        route: "/reference/sequencer/interfaces/BlockStorage",
        frontMatter: {
          "title": "BlockStorage"
        }
      }, {
        name: "BlockTrigger",
        route: "/reference/sequencer/interfaces/BlockTrigger",
        frontMatter: {
          "title": "BlockTrigger"
        }
      }, {
        name: "BlockWithMaybeResult",
        route: "/reference/sequencer/interfaces/BlockWithMaybeResult",
        frontMatter: {
          "title": "BlockWithMaybeResult"
        }
      }, {
        name: "BlockWithResult",
        route: "/reference/sequencer/interfaces/BlockWithResult",
        frontMatter: {
          "title": "BlockWithResult"
        }
      }, {
        name: "ClientBlock",
        route: "/reference/sequencer/interfaces/ClientBlock",
        frontMatter: {
          "title": "ClientBlock"
        }
      }, {
        name: "ClientTransaction",
        route: "/reference/sequencer/interfaces/ClientTransaction",
        frontMatter: {
          "title": "ClientTransaction"
        }
      }, {
        name: "Closeable",
        route: "/reference/sequencer/interfaces/Closeable",
        frontMatter: {
          "title": "Closeable"
        }
      }, {
        name: "Database",
        route: "/reference/sequencer/interfaces/Database",
        frontMatter: {
          "title": "Database"
        }
      }, {
        name: "DatabaseDependencyFactory",
        route: "/reference/sequencer/interfaces/DatabaseDependencyFactory",
        frontMatter: {
          "title": "DatabaseDependencyFactory"
        }
      }, {
        name: "IncomingMessageAdapter",
        route: "/reference/sequencer/interfaces/IncomingMessageAdapter",
        frontMatter: {
          "title": "IncomingMessageAdapter"
        }
      }, {
        name: "InMemorySignerConfig",
        route: "/reference/sequencer/interfaces/InMemorySignerConfig",
        frontMatter: {
          "title": "InMemorySignerConfig"
        }
      }, {
        name: "InstantiatedQueue",
        route: "/reference/sequencer/interfaces/InstantiatedQueue",
        frontMatter: {
          "title": "InstantiatedQueue"
        }
      }, {
        name: "InstrumentationModule",
        route: "/reference/sequencer/interfaces/InstrumentationModule",
        frontMatter: {
          "title": "InstrumentationModule"
        }
      }, {
        name: "LocalSequencerCoreConfig",
        route: "/reference/sequencer/interfaces/LocalSequencerCoreConfig",
        frontMatter: {
          "title": "LocalSequencerCoreConfig"
        }
      }, {
        name: "LocalSequencerCoreDependencies",
        route: "/reference/sequencer/interfaces/LocalSequencerCoreDependencies",
        frontMatter: {
          "title": "LocalSequencerCoreDependencies"
        }
      }, {
        name: "LocalTaskQueueConfig",
        route: "/reference/sequencer/interfaces/LocalTaskQueueConfig",
        frontMatter: {
          "title": "LocalTaskQueueConfig"
        }
      }, {
        name: "Mempool",
        route: "/reference/sequencer/interfaces/Mempool",
        frontMatter: {
          "title": "Mempool"
        }
      }, {
        name: "MempoolSorting",
        route: "/reference/sequencer/interfaces/MempoolSorting",
        frontMatter: {
          "title": "MempoolSorting"
        }
      }, {
        name: "MerkleTreeNode",
        route: "/reference/sequencer/interfaces/MerkleTreeNode",
        frontMatter: {
          "title": "MerkleTreeNode"
        }
      }, {
        name: "MerkleTreeNodeQuery",
        route: "/reference/sequencer/interfaces/MerkleTreeNodeQuery",
        frontMatter: {
          "title": "MerkleTreeNodeQuery"
        }
      }, {
        name: "MessageStorage",
        route: "/reference/sequencer/interfaces/MessageStorage",
        frontMatter: {
          "title": "MessageStorage"
        }
      }, {
        name: "MinaBaseLayerConfig",
        route: "/reference/sequencer/interfaces/MinaBaseLayerConfig",
        frontMatter: {
          "title": "MinaBaseLayerConfig"
        }
      }, {
        name: "MinaNetworkUtils",
        route: "/reference/sequencer/interfaces/MinaNetworkUtils",
        frontMatter: {
          "title": "MinaNetworkUtils"
        }
      }, {
        name: "MinaSigner",
        route: "/reference/sequencer/interfaces/MinaSigner",
        frontMatter: {
          "title": "MinaSigner"
        }
      }, {
        name: "NetworkStateTransportModule",
        route: "/reference/sequencer/interfaces/NetworkStateTransportModule",
        frontMatter: {
          "title": "NetworkStateTransportModule"
        }
      }, {
        name: "NewBlockProverParameters",
        route: "/reference/sequencer/interfaces/NewBlockProverParameters",
        frontMatter: {
          "title": "NewBlockProverParameters"
        }
      }, {
        name: "PairingDerivedInput",
        route: "/reference/sequencer/interfaces/PairingDerivedInput",
        frontMatter: {
          "title": "PairingDerivedInput"
        }
      }, {
        name: "PollInstrumentation",
        route: "/reference/sequencer/interfaces/PollInstrumentation",
        frontMatter: {
          "title": "PollInstrumentation"
        }
      }, {
        name: "Prunable",
        route: "/reference/sequencer/interfaces/Prunable",
        frontMatter: {
          "title": "Prunable"
        }
      }, {
        name: "QueryGetterState",
        route: "/reference/sequencer/interfaces/QueryGetterState",
        frontMatter: {
          "title": "QueryGetterState"
        }
      }, {
        name: "QueryGetterStateMap",
        route: "/reference/sequencer/interfaces/QueryGetterStateMap",
        frontMatter: {
          "title": "QueryGetterStateMap"
        }
      }, {
        name: "QueryTransportModule",
        route: "/reference/sequencer/interfaces/QueryTransportModule",
        frontMatter: {
          "title": "QueryTransportModule"
        }
      }, {
        name: "RuntimeProofParameters",
        route: "/reference/sequencer/interfaces/RuntimeProofParameters",
        frontMatter: {
          "title": "RuntimeProofParameters"
        }
      }, {
        name: "Sequenceable",
        route: "/reference/sequencer/interfaces/Sequenceable",
        frontMatter: {
          "title": "Sequenceable"
        }
      }, {
        name: "SequencerCoreConfig",
        route: "/reference/sequencer/interfaces/SequencerCoreConfig",
        frontMatter: {
          "title": "SequencerCoreConfig"
        }
      }, {
        name: "SequencerCoreDependencies",
        route: "/reference/sequencer/interfaces/SequencerCoreDependencies",
        frontMatter: {
          "title": "SequencerCoreDependencies"
        }
      }, {
        name: "SettleableBatch",
        route: "/reference/sequencer/interfaces/SettleableBatch",
        frontMatter: {
          "title": "SettleableBatch"
        }
      }, {
        name: "Settlement",
        route: "/reference/sequencer/interfaces/Settlement",
        frontMatter: {
          "title": "Settlement"
        }
      }, {
        name: "SettlementStorage",
        route: "/reference/sequencer/interfaces/SettlementStorage",
        frontMatter: {
          "title": "SettlementStorage"
        }
      }, {
        name: "SharedDependencyRecord",
        route: "/reference/sequencer/interfaces/SharedDependencyRecord",
        frontMatter: {
          "title": "SharedDependencyRecord"
        }
      }, {
        name: "SignTxOptions",
        route: "/reference/sequencer/interfaces/SignTxOptions",
        frontMatter: {
          "title": "SignTxOptions"
        }
      }, {
        name: "StartableModule",
        route: "/reference/sequencer/interfaces/StartableModule",
        frontMatter: {
          "title": "StartableModule"
        }
      }, {
        name: "StateEntry",
        route: "/reference/sequencer/interfaces/StateEntry",
        frontMatter: {
          "title": "StateEntry"
        }
      }, {
        name: "StateTransitionBatch",
        route: "/reference/sequencer/interfaces/StateTransitionBatch",
        frontMatter: {
          "title": "StateTransitionBatch"
        }
      }, {
        name: "StateTransitionProofParameters",
        route: "/reference/sequencer/interfaces/StateTransitionProofParameters",
        frontMatter: {
          "title": "StateTransitionProofParameters"
        }
      }, {
        name: "StorageDependencyMinimumDependencies",
        route: "/reference/sequencer/interfaces/StorageDependencyMinimumDependencies",
        frontMatter: {
          "title": "StorageDependencyMinimumDependencies"
        }
      }, {
        name: "Task",
        route: "/reference/sequencer/interfaces/Task",
        frontMatter: {
          "title": "Task"
        }
      }, {
        name: "TaskPayload",
        route: "/reference/sequencer/interfaces/TaskPayload",
        frontMatter: {
          "title": "TaskPayload"
        }
      }, {
        name: "TaskQueue",
        route: "/reference/sequencer/interfaces/TaskQueue",
        frontMatter: {
          "title": "TaskQueue"
        }
      }, {
        name: "TaskSerializer",
        route: "/reference/sequencer/interfaces/TaskSerializer",
        frontMatter: {
          "title": "TaskSerializer"
        }
      }, {
        name: "TimedBlockTriggerConfig",
        route: "/reference/sequencer/interfaces/TimedBlockTriggerConfig",
        frontMatter: {
          "title": "TimedBlockTriggerConfig"
        }
      }, {
        name: "Tracer",
        route: "/reference/sequencer/interfaces/Tracer",
        frontMatter: {
          "title": "Tracer"
        }
      }, {
        name: "TracingStateTransitionBatch",
        route: "/reference/sequencer/interfaces/TracingStateTransitionBatch",
        frontMatter: {
          "title": "TracingStateTransitionBatch"
        }
      }, {
        name: "TransactionExecutionResult",
        route: "/reference/sequencer/interfaces/TransactionExecutionResult",
        frontMatter: {
          "title": "TransactionExecutionResult"
        }
      }, {
        name: "TransactionStorage",
        route: "/reference/sequencer/interfaces/TransactionStorage",
        frontMatter: {
          "title": "TransactionStorage"
        }
      }, {
        name: "TxEvents",
        route: "/reference/sequencer/interfaces/TxEvents",
        frontMatter: {
          "title": "TxEvents"
        }
      }]
    }, {
      name: "namespaces",
      route: "/reference/sequencer/namespaces",
      children: [{
        name: "ArchiveNode",
        route: "/reference/sequencer/namespaces/ArchiveNode",
        children: [{
          name: "functions",
          route: "/reference/sequencer/namespaces/ArchiveNode/functions",
          children: [{
            name: "waitOnSync",
            route: "/reference/sequencer/namespaces/ArchiveNode/functions/waitOnSync",
            frontMatter: {
              "title": "waitOnSync"
            }
          }]
        }, {
          name: "README",
          route: "/reference/sequencer/namespaces/ArchiveNode/README",
          frontMatter: {
            "title": "ArchiveNode"
          }
        }]
      }]
    }, {
      name: "README",
      route: "/reference/sequencer/README",
      frontMatter: {
        "title": "@proto-kit/sequencer"
      }
    }, {
      name: "type-aliases",
      route: "/reference/sequencer/type-aliases",
      children: [{
        name: "AllTaskWorkerModules",
        route: "/reference/sequencer/type-aliases/AllTaskWorkerModules",
        frontMatter: {
          "title": "AllTaskWorkerModules"
        }
      }, {
        name: "AppChainModulesRecord",
        route: "/reference/sequencer/type-aliases/AppChainModulesRecord",
        frontMatter: {
          "title": "AppChainModulesRecord"
        }
      }, {
        name: "BatchTrace",
        route: "/reference/sequencer/type-aliases/BatchTrace",
        frontMatter: {
          "title": "BatchTrace"
        }
      }, {
        name: "BlockEvents",
        route: "/reference/sequencer/type-aliases/BlockEvents",
        frontMatter: {
          "title": "BlockEvents"
        }
      }, {
        name: "BlockTrace",
        route: "/reference/sequencer/type-aliases/BlockTrace",
        frontMatter: {
          "title": "BlockTrace"
        }
      }, {
        name: "BlockTracingState",
        route: "/reference/sequencer/type-aliases/BlockTracingState",
        frontMatter: {
          "title": "BlockTracingState"
        }
      }, {
        name: "BlockTrackers",
        route: "/reference/sequencer/type-aliases/BlockTrackers",
        frontMatter: {
          "title": "BlockTrackers"
        }
      }, {
        name: "BridgingModuleConfig",
        route: "/reference/sequencer/type-aliases/BridgingModuleConfig",
        frontMatter: {
          "title": "BridgingModuleConfig"
        }
      }, {
        name: "ChainStateTaskArgs",
        route: "/reference/sequencer/type-aliases/ChainStateTaskArgs",
        frontMatter: {
          "title": "ChainStateTaskArgs"
        }
      }, {
        name: "CompilerTaskParams",
        route: "/reference/sequencer/type-aliases/CompilerTaskParams",
        frontMatter: {
          "title": "CompilerTaskParams"
        }
      }, {
        name: "ConstantFeeStrategyConfig",
        route: "/reference/sequencer/type-aliases/ConstantFeeStrategyConfig",
        frontMatter: {
          "title": "ConstantFeeStrategyConfig"
        }
      }, {
        name: "JSONEncodableState",
        route: "/reference/sequencer/type-aliases/JSONEncodableState",
        frontMatter: {
          "title": "JSONEncodableState"
        }
      }, {
        name: "LightnetMinaBaseLayerConfig",
        route: "/reference/sequencer/type-aliases/LightnetMinaBaseLayerConfig",
        frontMatter: {
          "title": "LightnetMinaBaseLayerConfig"
        }
      }, {
        name: "LocalMinaBaseLayerConfig",
        route: "/reference/sequencer/type-aliases/LocalMinaBaseLayerConfig",
        frontMatter: {
          "title": "LocalMinaBaseLayerConfig"
        }
      }, {
        name: "MapStateMapToQuery",
        route: "/reference/sequencer/type-aliases/MapStateMapToQuery",
        frontMatter: {
          "title": "MapStateMapToQuery"
        }
      }, {
        name: "MapStateToQuery",
        route: "/reference/sequencer/type-aliases/MapStateToQuery",
        frontMatter: {
          "title": "MapStateToQuery"
        }
      }, {
        name: "MempoolEvents",
        route: "/reference/sequencer/type-aliases/MempoolEvents",
        frontMatter: {
          "title": "MempoolEvents"
        }
      }, {
        name: "MinimalAppChainDefinition",
        route: "/reference/sequencer/type-aliases/MinimalAppChainDefinition",
        frontMatter: {
          "title": "MinimalAppChainDefinition"
        }
      }, {
        name: "ModuleQuery",
        route: "/reference/sequencer/type-aliases/ModuleQuery",
        frontMatter: {
          "title": "ModuleQuery"
        }
      }, {
        name: "NewBlockArguments",
        route: "/reference/sequencer/type-aliases/NewBlockArguments",
        frontMatter: {
          "title": "NewBlockArguments"
        }
      }, {
        name: "NewBlockProvingParameters",
        route: "/reference/sequencer/type-aliases/NewBlockProvingParameters",
        frontMatter: {
          "title": "NewBlockProvingParameters"
        }
      }, {
        name: "PairTuple",
        route: "/reference/sequencer/type-aliases/PairTuple",
        frontMatter: {
          "title": "PairTuple"
        }
      }, {
        name: "PickByType",
        route: "/reference/sequencer/type-aliases/PickByType",
        frontMatter: {
          "title": "PickByType"
        }
      }, {
        name: "PickStateMapProperties",
        route: "/reference/sequencer/type-aliases/PickStateMapProperties",
        frontMatter: {
          "title": "PickStateMapProperties"
        }
      }, {
        name: "PickStateProperties",
        route: "/reference/sequencer/type-aliases/PickStateProperties",
        frontMatter: {
          "title": "PickStateProperties"
        }
      }, {
        name: "Query",
        route: "/reference/sequencer/type-aliases/Query",
        frontMatter: {
          "title": "Query"
        }
      }, {
        name: "RemoteMinaBaseLayerConfig",
        route: "/reference/sequencer/type-aliases/RemoteMinaBaseLayerConfig",
        frontMatter: {
          "title": "RemoteMinaBaseLayerConfig"
        }
      }, {
        name: "RuntimeContextReducedExecutionResult",
        route: "/reference/sequencer/type-aliases/RuntimeContextReducedExecutionResult",
        frontMatter: {
          "title": "RuntimeContextReducedExecutionResult"
        }
      }, {
        name: "SequencerModulesRecord",
        route: "/reference/sequencer/type-aliases/SequencerModulesRecord",
        frontMatter: {
          "title": "SequencerModulesRecord"
        }
      }, {
        name: "SerializedArtifactRecord",
        route: "/reference/sequencer/type-aliases/SerializedArtifactRecord",
        frontMatter: {
          "title": "SerializedArtifactRecord"
        }
      }, {
        name: "SettlementModuleConfig",
        route: "/reference/sequencer/type-aliases/SettlementModuleConfig",
        frontMatter: {
          "title": "SettlementModuleConfig"
        }
      }, {
        name: "SettlementModuleEvents",
        route: "/reference/sequencer/type-aliases/SettlementModuleEvents",
        frontMatter: {
          "title": "SettlementModuleEvents"
        }
      }, {
        name: "SettlementTokenConfig",
        route: "/reference/sequencer/type-aliases/SettlementTokenConfig",
        frontMatter: {
          "title": "SettlementTokenConfig"
        }
      }, {
        name: "SomeRuntimeMethod",
        route: "/reference/sequencer/type-aliases/SomeRuntimeMethod",
        frontMatter: {
          "title": "SomeRuntimeMethod"
        }
      }, {
        name: "StateRecord",
        route: "/reference/sequencer/type-aliases/StateRecord",
        frontMatter: {
          "title": "StateRecord"
        }
      }, {
        name: "TaskStateRecord",
        route: "/reference/sequencer/type-aliases/TaskStateRecord",
        frontMatter: {
          "title": "TaskStateRecord"
        }
      }, {
        name: "TaskWorkerModulesRecord",
        route: "/reference/sequencer/type-aliases/TaskWorkerModulesRecord",
        frontMatter: {
          "title": "TaskWorkerModulesRecord"
        }
      }, {
        name: "TaskWorkerModulesWithoutSettlement",
        route: "/reference/sequencer/type-aliases/TaskWorkerModulesWithoutSettlement",
        frontMatter: {
          "title": "TaskWorkerModulesWithoutSettlement"
        }
      }, {
        name: "TransactionExecutionResultStatus",
        route: "/reference/sequencer/type-aliases/TransactionExecutionResultStatus",
        frontMatter: {
          "title": "TransactionExecutionResultStatus"
        }
      }, {
        name: "TransactionProverTaskParametersJSON",
        route: "/reference/sequencer/type-aliases/TransactionProverTaskParametersJSON",
        frontMatter: {
          "title": "TransactionProverTaskParametersJSON"
        }
      }, {
        name: "TransactionProverTransactionArgumentsJSON",
        route: "/reference/sequencer/type-aliases/TransactionProverTransactionArgumentsJSON",
        frontMatter: {
          "title": "TransactionProverTransactionArgumentsJSON"
        }
      }, {
        name: "TransactionProvingTaskParametersJSON",
        route: "/reference/sequencer/type-aliases/TransactionProvingTaskParametersJSON",
        frontMatter: {
          "title": "TransactionProvingTaskParametersJSON"
        }
      }, {
        name: "TransactionTaskArgs",
        route: "/reference/sequencer/type-aliases/TransactionTaskArgs",
        frontMatter: {
          "title": "TransactionTaskArgs"
        }
      }, {
        name: "TransactionTaskResult",
        route: "/reference/sequencer/type-aliases/TransactionTaskResult",
        frontMatter: {
          "title": "TransactionTaskResult"
        }
      }, {
        name: "TransactionTrace",
        route: "/reference/sequencer/type-aliases/TransactionTrace",
        frontMatter: {
          "title": "TransactionTrace"
        }
      }, {
        name: "TransactionTracingState",
        route: "/reference/sequencer/type-aliases/TransactionTracingState",
        frontMatter: {
          "title": "TransactionTracingState"
        }
      }, {
        name: "TxSendResult",
        route: "/reference/sequencer/type-aliases/TxSendResult",
        frontMatter: {
          "title": "TxSendResult"
        }
      }, {
        name: "TypedClass",
        route: "/reference/sequencer/type-aliases/TypedClass",
        frontMatter: {
          "title": "TypedClass"
        }
      }, {
        name: "UnsignedTransactionBody",
        route: "/reference/sequencer/type-aliases/UnsignedTransactionBody",
        frontMatter: {
          "title": "UnsignedTransactionBody"
        }
      }, {
        name: "VerificationKeyJSON",
        route: "/reference/sequencer/type-aliases/VerificationKeyJSON",
        frontMatter: {
          "title": "VerificationKeyJSON"
        }
      }, {
        name: "WorkerStartupPayload",
        route: "/reference/sequencer/type-aliases/WorkerStartupPayload",
        frontMatter: {
          "title": "WorkerStartupPayload"
        }
      }]
    }, {
      name: "variables",
      route: "/reference/sequencer/variables",
      children: [{
        name: "Block",
        route: "/reference/sequencer/variables/Block",
        frontMatter: {
          "title": "Block"
        }
      }, {
        name: "BlockTrackers",
        route: "/reference/sequencer/variables/BlockTrackers",
        frontMatter: {
          "title": "BlockTrackers"
        }
      }, {
        name: "BlockWithResult",
        route: "/reference/sequencer/variables/BlockWithResult",
        frontMatter: {
          "title": "BlockWithResult"
        }
      }, {
        name: "JSONTaskSerializer",
        route: "/reference/sequencer/variables/JSONTaskSerializer",
        frontMatter: {
          "title": "JSONTaskSerializer"
        }
      }, {
        name: "QueryBuilderFactory",
        route: "/reference/sequencer/variables/QueryBuilderFactory",
        frontMatter: {
          "title": "QueryBuilderFactory"
        }
      }]
    }]
  }, {
    name: "stack",
    route: "/reference/stack",
    children: [{
      data: reference_stack_meta
    }, {
      name: "classes",
      route: "/reference/stack/classes",
      children: [{
        name: "TestBalances",
        route: "/reference/stack/classes/TestBalances",
        frontMatter: {
          "title": "TestBalances"
        }
      }]
    }, {
      name: "functions",
      route: "/reference/stack/functions",
      children: [{
        name: "buildCustomTokenConfig",
        route: "/reference/stack/functions/buildCustomTokenConfig",
        frontMatter: {
          "title": "buildCustomTokenConfig"
        }
      }, {
        name: "buildSettlementTokenConfig",
        route: "/reference/stack/functions/buildSettlementTokenConfig",
        frontMatter: {
          "title": "buildSettlementTokenConfig"
        }
      }, {
        name: "startServer",
        route: "/reference/stack/functions/startServer",
        frontMatter: {
          "title": "startServer"
        }
      }]
    }, {
      name: "globals",
      route: "/reference/stack/globals",
      frontMatter: {
        "title": "@proto-kit/stack"
      }
    }, {
      name: "README",
      route: "/reference/stack/README",
      frontMatter: {
        "title": "@proto-kit/stack"
      }
    }]
  }]
}];