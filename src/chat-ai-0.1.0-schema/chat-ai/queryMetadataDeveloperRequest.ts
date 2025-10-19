import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryMetadataDeveloperRequest
 */
export class QueryMetadataDeveloperRequest extends HaleyChatDeveloperCommand {
  public haleyChatMetadataTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryMetadataDeveloperRequest';
  }

  /**
   * Get property definitions for QueryMetadataDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMetadataTypeURI',
        tsPropertyName: 'haleyChatMetadataTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
