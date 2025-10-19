import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AgentPersonaItem
 */
export class AgentPersonaItem extends VITAL_Node {
  public agentPersonaInstanceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AgentPersonaItem';
  }

  /**
   * Get property definitions for AgentPersonaItem
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentPersonaInstanceURI',
        tsPropertyName: 'agentPersonaInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
