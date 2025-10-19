import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailSummary
 */
export class EmailSummary extends VITAL_Node {
  public bccRecipients?: string;
  public eMailTagURI?: string[];
  public recipients?: string;
  public trackingOpens?: boolean;
  public category?: string;
  public eventTimestamp?: number;
  public bodyPlain?: string;
  public sender?: string;
  public attachmentsCount?: number;
  public read?: boolean;
  public bodyHtml?: string;
  public ccRecipients?: string;
  public messageID?: string;
  public accountURI?: string;
  public subject?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailSummary';
  }

  /**
   * Get property definitions for EmailSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBccRecipients',
        tsPropertyName: 'bccRecipients',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEMailTagURI',
        tsPropertyName: 'eMailTagURI',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipients',
        tsPropertyName: 'recipients',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTrackingOpens',
        tsPropertyName: 'trackingOpens',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCategory',
        tsPropertyName: 'category',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventTimestamp',
        tsPropertyName: 'eventTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBodyPlain',
        tsPropertyName: 'bodyPlain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAttachmentsCount',
        tsPropertyName: 'attachmentsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRead',
        tsPropertyName: 'read',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBodyHtml',
        tsPropertyName: 'bodyHtml',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCcRecipients',
        tsPropertyName: 'ccRecipients',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageID',
        tsPropertyName: 'messageID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubject',
        tsPropertyName: 'subject',
        type: 'string',
        required: false
      }
    ];
  }


}
