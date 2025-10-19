import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeploymentStatus
 */
export class AgentInstanceContainerDeploymentStatus extends VITAL_Node {
  public agentInstanceContainerDeploymentStatusTypeURI?: string;
  public agentInstanceDeploymentURI?: string;
  public agentInstanceContainerDeploymentStatusMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeploymentStatus';
  }

  /**
   * Get property definitions for AgentInstanceContainerDeploymentStatus
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentURI',
        tsPropertyName: 'agentInstanceDeploymentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceContainerDeploymentStatusMessage',
        tsPropertyName: 'agentInstanceContainerDeploymentStatusMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
