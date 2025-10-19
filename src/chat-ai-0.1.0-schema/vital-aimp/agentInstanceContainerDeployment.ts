import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeployment
 */
export class AgentInstanceContainerDeployment extends VITAL_Node {
  public agentInstanceContainerDeploymentStatusTypeURI?: string;
  public containerTaskMaximumCount?: number;
  public containerLoadBalancerName?: string;
  public containerLoadBalancerURL?: string;
  public containerLaunchDateTime?: string | Date;
  public containerTaskName?: string;
  public containerServiceName?: string;
  public containerImageIdentifier?: string;
  public containerClusterName?: string;
  public containerStoppedDateTime?: string | Date;
  public containerRepository?: string;
  public containerTaskMinimumCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeployment';
  }

  /**
   * Get property definitions for AgentInstanceContainerDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceContainerDeploymentStatusTypeURI',
        tsPropertyName: 'agentInstanceContainerDeploymentStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskMaximumCount',
        tsPropertyName: 'containerTaskMaximumCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLoadBalancerName',
        tsPropertyName: 'containerLoadBalancerName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLoadBalancerURL',
        tsPropertyName: 'containerLoadBalancerURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLaunchDateTime',
        tsPropertyName: 'containerLaunchDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskName',
        tsPropertyName: 'containerTaskName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerServiceName',
        tsPropertyName: 'containerServiceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerImageIdentifier',
        tsPropertyName: 'containerImageIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerClusterName',
        tsPropertyName: 'containerClusterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerStoppedDateTime',
        tsPropertyName: 'containerStoppedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerRepository',
        tsPropertyName: 'containerRepository',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskMinimumCount',
        tsPropertyName: 'containerTaskMinimumCount',
        type: 'number',
        required: false
      }
    ];
  }


}
