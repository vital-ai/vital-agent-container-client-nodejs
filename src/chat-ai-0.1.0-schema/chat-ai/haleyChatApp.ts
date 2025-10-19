import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatApp
 */
export class HaleyChatApp extends VITAL_Node {
  public haleyChatAppVersion?: string;
  public haleyChatForceAppReload?: boolean;
  public haleyChatReportedAppVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatApp';
  }

  /**
   * Get property definitions for HaleyChatApp
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAppVersion',
        tsPropertyName: 'haleyChatAppVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatForceAppReload',
        tsPropertyName: 'haleyChatForceAppReload',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatReportedAppVersion',
        tsPropertyName: 'haleyChatReportedAppVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
