import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount
 */
export class HaleyChatDiscourseAccount extends VITAL_Node {
  public haleyChatDiscourseAccountInvited?: boolean;
  public haleyChatDiscourseAccountEmail?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount';
  }

  /**
   * Get property definitions for HaleyChatDiscourseAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatDiscourseAccountInvited',
        tsPropertyName: 'haleyChatDiscourseAccountInvited',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDiscourseAccountEmail',
        tsPropertyName: 'haleyChatDiscourseAccountEmail',
        type: 'string',
        required: false
      }
    ];
  }


}
