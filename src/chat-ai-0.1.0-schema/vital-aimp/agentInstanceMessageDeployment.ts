import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceMessageDeployment
 */
export class AgentInstanceMessageDeployment extends VITAL_Node {
  public agentMessageTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstanceMessageDeployment';
  }

  /**
   * Get property definitions for AgentInstanceMessageDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentMessageTypeURI',
        tsPropertyName: 'agentMessageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
