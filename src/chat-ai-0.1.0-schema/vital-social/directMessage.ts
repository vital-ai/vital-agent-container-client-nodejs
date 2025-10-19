import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#DirectMessage
 */
export class DirectMessage extends Document {
  public directMessageID?: number;
  public authorID?: number;
  public recipientID?: number;
  public authorName?: string;
  public authorScreenName?: string;
  public recipientName?: string;
  public recipientScreenName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#DirectMessage';
  }

  /**
   * Get property definitions for DirectMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasDirectMessageID',
        tsPropertyName: 'directMessageID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorID',
        tsPropertyName: 'authorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientID',
        tsPropertyName: 'recipientID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorScreenName',
        tsPropertyName: 'authorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientName',
        tsPropertyName: 'recipientName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientScreenName',
        tsPropertyName: 'recipientScreenName',
        type: 'string',
        required: false
      }
    ];
  }


}
