import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyInterAccountRequest
 */
export class HaleyInterAccountRequest extends VITAL_Node {
  public haleyChatModelTemperature?: number;
  public haleyChatTestModeURI?: string;
  public haleyChatCommandInputKey?: string;
  public haleyChatCommandModeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyInterAccountRequest';
  }

  /**
   * Get property definitions for HaleyInterAccountRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatModelTemperature',
        tsPropertyName: 'haleyChatModelTemperature',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTestModeURI',
        tsPropertyName: 'haleyChatTestModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandInputKey',
        tsPropertyName: 'haleyChatCommandInputKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI',
        tsPropertyName: 'haleyChatCommandModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
