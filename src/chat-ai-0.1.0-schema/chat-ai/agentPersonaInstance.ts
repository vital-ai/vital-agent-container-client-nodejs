import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AgentPersonaInstance
 */
export class AgentPersonaInstance extends VITAL_Node {
  public agentPersonaURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AgentPersonaInstance';
  }

  /**
   * Get property definitions for AgentPersonaInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentPersonaURI',
        tsPropertyName: 'agentPersonaURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
