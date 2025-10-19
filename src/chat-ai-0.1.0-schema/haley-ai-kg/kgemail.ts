import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEMail
 */
export class KGEMail extends KGNode {
  public kGEmailSenderName?: string;
  public kGEmailToAddressList?: string;
  public kGEmailSendDateTime?: string | Date;
  public kGEmailSenderAddress?: string;
  public kGEmailSubject?: string;
  public kGEmailCCAddressList?: string;
  public kGEmailSummary?: string;
  public kGEMailType?: string;
  public kGEmailRecipientAddress?: string;
  public kGEmailBCCAddressList?: string;
  public kGEmailRecipientName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEMail';
  }

  /**
   * Get property definitions for KGEMail
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSenderName',
        tsPropertyName: 'kGEmailSenderName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailToAddressList',
        tsPropertyName: 'kGEmailToAddressList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSendDateTime',
        tsPropertyName: 'kGEmailSendDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSenderAddress',
        tsPropertyName: 'kGEmailSenderAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSubject',
        tsPropertyName: 'kGEmailSubject',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailCCAddressList',
        tsPropertyName: 'kGEmailCCAddressList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSummary',
        tsPropertyName: 'kGEmailSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEMailType',
        tsPropertyName: 'kGEMailType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailRecipientAddress',
        tsPropertyName: 'kGEmailRecipientAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailBCCAddressList',
        tsPropertyName: 'kGEmailBCCAddressList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailRecipientName',
        tsPropertyName: 'kGEmailRecipientName',
        type: 'string',
        required: false
      }
    ];
  }


}
