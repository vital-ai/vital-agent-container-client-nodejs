import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceDeployment
 */
export class AgentInstanceDeployment extends VITAL_Node {
  public agentInstanceDeploymentPathURI?: string;
  public agentInstanceDeploymentImplTypeURI?: string;
  public agentInstanceDeploymentTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstanceDeployment';
  }

  /**
   * Get property definitions for AgentInstanceDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentPathURI',
        tsPropertyName: 'agentInstanceDeploymentPathURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentImplTypeURI',
        tsPropertyName: 'agentInstanceDeploymentImplTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentTypeURI',
        tsPropertyName: 'agentInstanceDeploymentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
