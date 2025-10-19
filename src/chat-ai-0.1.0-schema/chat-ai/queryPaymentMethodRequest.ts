import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest
 */
export class QueryPaymentMethodRequest extends HaleyChatCommand {
  public chatQueryLimit?: number;
  public chatQuerySortDirectionURI?: string;
  public chatQuerySortProperty?: string;
  public chatQueryOffset?: number;
  public chatQueryFilter?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest';
  }

  /**
   * Get property definitions for QueryPaymentMethodRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryLimit',
        tsPropertyName: 'chatQueryLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI',
        tsPropertyName: 'chatQuerySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty',
        tsPropertyName: 'chatQuerySortProperty',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryOffset',
        tsPropertyName: 'chatQueryOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryFilter',
        tsPropertyName: 'chatQueryFilter',
        type: 'string',
        required: false
      }
    ];
  }


}
